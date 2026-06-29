interface LessonRow {
  challenge: string;
  learned: string;
}

interface LessonTableProps {
  rows: LessonRow[];
}

export default function LessonTable({ rows }: LessonTableProps) {
  return (
    <div
      className="rounded-lg overflow-hidden shadow-sm"
      style={{ border: "1px solid var(--border)" }}
    >
      <table className="w-full">
        <thead>
          <tr style={{ backgroundColor: "var(--bg-secondary)" }}>
            <th
              className="text-left text-sm font-semibold px-5 py-3 w-1/2"
              style={{ color: "var(--text-primary)", borderBottom: "1px solid var(--border)" }}
            >
              Challenge
            </th>
            <th
              className="text-left text-sm font-semibold px-5 py-3 w-1/2"
              style={{ color: "var(--text-primary)", borderBottom: "1px solid var(--border)" }}
            >
              What I Learned
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              style={{
                backgroundColor: i % 2 === 0 ? "var(--bg-primary)" : "var(--bg-secondary)",
              }}
            >
              <td
                className="text-sm px-5 py-4 align-top"
                style={{
                  color: "var(--text-secondary)",
                  borderBottom: i < rows.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                {row.challenge}
              </td>
              <td
                className="text-sm px-5 py-4 align-top"
                style={{
                  color: "var(--text-primary)",
                  borderBottom: i < rows.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                {row.learned}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
