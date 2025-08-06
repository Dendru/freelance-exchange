const STORAGE_KEY = "tasks";

export function getTasksFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  try {
    return JSON.parse(raw) || [];
  } catch {
    return [];
  }
}

export function saveTasksToStorage(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
