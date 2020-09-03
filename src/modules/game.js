const timeout = (time) => new Promise((resolve) => setTimeout(resolve, time));

export const createGame = async () => {
  console.log("Creating game...");

  const gameContext = document.createElement("h1");
  const gameTitle = document.createTextNode("Loading...");

  gameContext.appendChild(gameTitle);
  document.body.appendChild(gameContext);

  await timeout(2000);

  gameTitle.nodeValue = "Ready to game";

  console.log("Done creating game");
};
