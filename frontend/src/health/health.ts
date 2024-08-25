(async () => {
  const response = await fetch("/api/health");
  if (response.ok) {
    const health = await response.json();
    const body = document.querySelector("body");
    if (body) {
      body.appendChild(healthTable(health));
    }
  }
})();

type HealthStats = {
  idle: number;
  in_use: number;
  max_idle_closed: number;
  max_lifetime_closed: number;
  message: string;
  open_connections: number;
  status: string;
  wait_count: number;
  wait_duration: string;
};

function healthTable(stats: HealthStats) {
  const table = document.createElement("table");

  for (const [key, value] of Object.entries(stats)) {
    const row = document.createElement("tr");
    const keyCell = document.createElement("td");
    keyCell.textContent = formatName(key);
    const valueCell = document.createElement("td");
    valueCell.textContent = value.toString();
    row.appendChild(keyCell);
    row.appendChild(valueCell);
    table.appendChild(row);
  }

  return table;
}

function formatName(name: string) {
  return name
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
