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
  table.innerHTML = `
    <table>
        <tr>
            <td>Status</td>
            <td>${stats.status}</td>
        </tr>
        <tr>
            <td>Open Connections</td>
            <td>${stats.open_connections}</td>
        </tr>
        <tr>
            <td>Idle</td>
            <td>${stats.idle}</td>
        </tr>
        <tr>
            <td>In Use</td>
            <td>${stats.in_use}</td>
        </tr>
        <tr>
            <td>Max Idle Closed</td>
            <td>${stats.max_idle_closed}</td>
        </tr>
        <tr>
            <td>Max Lifetime Closed</td>
            <td>${stats.max_lifetime_closed}</td>
        </tr>
        <tr>
            <td>Wait Count</td>
            <td>${stats.wait_count}</td>
        </tr>
        <tr>
            <td>Wait Duration</td>
            <td>${stats.wait_duration}</td>
        </tr>
        <tr>
            <td>Message</td>
            <td>${stats.message}</td>
        </tr>
    </table>
    `;

  return table;
}
