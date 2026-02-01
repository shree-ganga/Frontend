function UserProfile({ role, level, onChange }) {
  return (
    <div className="card">
      <h3>🧑‍💻 Select Your Profile</h3>

      <select
        value={role}
        onChange={(e) => onChange(e.target.value, level)}
      >
        <option value="">Select Role</option>
        <option value="Frontend">Frontend</option>
        <option value="Full Stack">Full Stack</option>
        <option value="Java">Java</option>
        <option value="UI/UX">UI/UX</option>
      </select>

      <br /><br />

      <select
        value={level}
        onChange={(e) => onChange(role, e.target.value)}
      >
        <option value="">Select Level</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
      </select>
    </div>
  );
}

export default UserProfile;
