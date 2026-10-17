const USERS_KEY = "async-users";
const DATABASE_KEY = "async-users-database";

const usersElement = document.querySelector("#users");
const statusElement = document.querySelector("#status");
const showAllButton = document.querySelector("#show-all");
const deleteAllButton = document.querySelector("#delete-all");

let users = [];
let databaseUsers = null;

function validateUsers(value) {
  if (
    !Array.isArray(value) ||
    !value.every(
      (user) =>
        user &&
        user.id !== undefined &&
        typeof user.name === "string" &&
        typeof user.surname === "string" &&
        typeof user.email === "string" &&
        user.age !== undefined,
    )
  ) {
    throw new Error("Ошибка при загрузке данных");
  }

  return value;
}

function setStatus(message, kind = "info") {
  statusElement.textContent = message;
  statusElement.dataset.kind = kind;
}

function renderUsers() {
  usersElement.replaceChildren();

  users.forEach((user) => {
    const card = document.createElement("article");
    card.className = "user-card";

    const id = document.createElement("p");
    id.className = "user-card__id";
    id.textContent = `ПОЛЬЗОВАТЕЛЬ #${user.id}`;

    const name = document.createElement("h2");
    name.className = "user-card__name";
    name.textContent = `${user.name} ${user.surname}`;

    const details = document.createElement("p");
    details.className = "user-card__details";
    details.append(`${user.email} · ${user.age} лет`);

    const deleteButton = document.createElement("button");
    deleteButton.className = "user-card__delete";
    deleteButton.type = "button";
    deleteButton.textContent = "Удалить пользователя";
    deleteButton.addEventListener("click", () => deleteUser(user.id));

    card.append(id, name, details, deleteButton);
    usersElement.append(card);
  });
}

function saveUsers(nextUsers) {
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(nextUsers));
    users = nextUsers;
    renderUsers();
  } catch (error) {
    throw new Error(`Не удалось сохранить данные: ${error.message}`);
  }
}

function deleteUser(userId) {
  const nextUsers = users.filter((user) => user.id !== userId);

  try {
    saveUsers(nextUsers);
    setStatus("Пользователь удалён.");
  } catch (error) {
    setStatus(error.message, "error");
  }
}

deleteAllButton.addEventListener("click", () => {
  if (users.length === 0) {
    setStatus("Список пользователей уже пуст.");
    return;
  }

  try {
    saveUsers([]);
    setStatus("Все карточки удалены.");
  } catch (error) {
    setStatus(error.message, "error");
  }
});

showAllButton.addEventListener("click", () => {
  if (databaseUsers === null) {
    setStatus("Исходный список пользователей недоступен.", "error");
    return;
  }

  const allUsersAreVisible =
    users.length === databaseUsers.length &&
    users.every((user) =>
      databaseUsers.some((databaseUser) => databaseUser.id === user.id),
    );

  if (allUsersAreVisible) {
    setStatus("Все пользователи уже отображены.");
    return;
  }

  try {
    saveUsers(databaseUsers.map((user) => ({ ...user })));
    setStatus(`Отображены все пользователи: ${users.length}.`);
  } catch (error) {
    setStatus(error.message, "error");
  }
});

function readStoredUsers(key) {
  const storedValue = localStorage.getItem(key);
  return storedValue === null ? null : validateUsers(JSON.parse(storedValue));
}

async function loadUsers() {
  await new Promise((resolve) => setTimeout(resolve, 1200));

  const response = await fetch("./users.json");
  if (!response.ok) {
    throw new Error("Ошибка при загрузке данных");
  }

  let payload;
  try {
    payload = await response.json();
  } catch {
    throw new Error("Ошибка при загрузке данных");
  }

  const loadedUsers = validateUsers(payload.users);
  localStorage.setItem(DATABASE_KEY, JSON.stringify(loadedUsers));
  localStorage.setItem(USERS_KEY, JSON.stringify(loadedUsers));
  return loadedUsers;
}

async function initialize() {
  try {
    const storedUsers = readStoredUsers(USERS_KEY);
    if (storedUsers !== null) {
      users = storedUsers;
      try {
        databaseUsers = readStoredUsers(DATABASE_KEY);
      } catch {
        databaseUsers = null;
      }
      renderUsers();
      setStatus(
        users.length
          ? `Данные восстановлены: ${users.length}.`
          : "Список пользователей пуст.",
      );
      return;
    }

    users = await loadUsers();
    databaseUsers = [...users];
    renderUsers();
    setStatus(`Данные загружены: ${users.length}.`);
  } catch (error) {
    console.error(error);
    setStatus("Ошибка при загрузке данных", "error");
  }
}

initialize();
