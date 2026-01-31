export const CastItem = ({ id, name, profile_path, character, gender }) => {
  return (
    <li id={id}>
      <img
        src={
          profile_path
            ? "https://image.tmdb.org/t/p/w500" + profile_path
            : gender === 1
              ? "https://i.postimg.cc/FHJynK3r/woman.png"
              : gender === 2
                ? "https://i.postimg.cc/tCsWYgrk/man.png"
                : "https://i.postimg.cc/CxHVcyCY/no-gender.png"
        }
        alt="Person"
      />
      <div>
        <h2>{name}</h2>
        <p>Character: {character}</p>
      </div>
    </li>
  );
};
