const freelancers = [
    { name: "Dr. Slice", occupation: "gardener", startingPrice: 25 },
    { name: "Dr. Pressure", occupation: "programmer", startingPrice: 51 },
    { name: "Prof. Possibility", occupation: "teacher", startingPrice: 43 },
    { name: "Prof. Prism", occupation: "teacher", startingPrice: 81 },
    { name: "Dr. Impulse", occupation: "teacher", startingPrice: 43 },
    { name: "Prof. Spark", occupation: "programmer", startingPrice: 76 },
    { name: "Dr. Wire", occupation: "teacher", startingPrice: 47 },
    { name: "Prof. Goose", occupation: "driver", startingPrice: 72 },
  ];

  let sumAllFreeLancers = 0;
  const liArray = [];

  const infoBox = document.createElement('div');

  const h1MainTitle = document.createElement(`h1`);
  const h3AvPrice = document.createElement(`h3`);
  const h2AvFree = document.createElement(`h2`);
  const jobBoard = document.createElement(`div`); 
  const jobHeader = document.createElement(`h3`);
  const ulFree = document.createElement(`ul`);

  h1MainTitle.innerHTML = `Freelancer's Info`;
  h3AvPrice.innerHTML = ``;
  h2AvFree.innerHTML = `Available Freelancers`;
  jobHeader.innerHTML = `Freelancers`;

  document.body.appendChild(infoBox);
  document.body.appendChild(jobBoard);
  infoBox.appendChild(h1MainTitle);
  infoBox.appendChild(h3AvPrice);
  infoBox.appendChild(h2AvFree);
  jobBoard.appendChild(jobHeader);
  jobBoard.appendChild(ulFree);
  
  for (let i= 0; i < freelancers.length; i++) {
    const element = freelancers[i];
    sumAllFreeLancers += element.startingPrice;
    liArray[i] = document.createElement(`li`);
    liArray[i].innerHTML = `${element.name}, ${element.occupation}, $${element.startingPrice}/hr`;  
    ulFree.appendChild(liArray[i]);
  }

  const averagePrice = sumAllFreeLancers / freelancers.length;
  h3AvPrice.innerHTML = `The average price for hiring a Dev is $${averagePrice.toFixed(2)}/hr`;

  const containerDiv = document.createElement(`div`);

containerDiv.style.maxWidth = "800px";
containerDiv.style.margin = "20px auto";
containerDiv.style.border = "2px solid black";
containerDiv.style.borderRadius = "8px";
containerDiv.style.display = "flex";
containerDiv.style.flexDirection = "column";
containerDiv.style.alignItems = "center";
containerDiv.style.backgroundColor = "red";

document.body.appendChild(containerDiv)
containerDiv.appendChild(infoBox);
containerDiv.appendChild(jobBoard);

h1MainTitle.style.color = "black";
h2AvFree.style.color = "black";
h3AvPrice.style.color = "white";
jobHeader.style.color = "white"; 

