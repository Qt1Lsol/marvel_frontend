import { useState } from "react";

const Signup = () => {
  // 1 state par input
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // Je peux faire une fonction par input qui gère le fait d'enregistrer, dans le state correspondant, le contenu de l'input (untile seulement pour ne pas surcharger le onClick de ma balise, ici il n'y aurait qu'une ligne dans mon onClick donc ce n'est aps utile)
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Je peux aussi faire une fonction qui gère la liaison entre tous les inputs et leurs states correspondants
  const handleInputChange = (event, input) => {
    setPassword(event.target.value);
  };

  return (
    <form>
      <div>Signup</div>
      <input
        type="text"
        placeholder="username"
        onChange={(event) => {
          // Si je n'ai qu'une ligne dans mon onclick, je peux ne pas utiliser de fonction extérieure au onClick
          setUsername(event.target.value);
        }}
      />
      <input type="text" placeholder="email" onChange={handleEmailChange} />

      <input
        type="text"
        placeholder="password"
        onChange={(event) => {
          handleInputChange(event, "password");
        }}
      />
      <input type="submit" value="s'inscrire" />
    </form>
  );
};

export default Signup;
