// Agent data
const agents = [
  {
    name: "Jett",
    role: "Duelist",
    image: "img/agents/jett.png",
    description: "A swift and agile duelist who specializes in mobility and precision. Her abilities allow her to dash through the battlefield and take down enemies with deadly accuracy."
  },
  {
    name: "Sage",
    role: "Sentinel",
    image: "img/agents/sage.png",
    description: "A powerful healer and defender who can revive fallen allies and create barriers to protect her team. Her abilities make her essential for team survival."
  },
  {
    name: "Omen",
    role: "Controller",
    image: "img/agents/omen.png",
    description: "A mysterious controller who can teleport across the map and create smokescreens to control the battlefield. His abilities make him a master of deception."
  },
  {
    name: "Reyna",
    role: "Duelist",
    image: "img/agents/reyna.png",
    description: "A fierce duelist who grows stronger with each kill. Her abilities allow her to heal herself and become temporarily invulnerable, making her a deadly force in combat."
  },
  {
    name: "Cypher",
    role: "Sentinel",
    image: "img/agents/cypher.png",
    description: "A surveillance expert who can track enemy movements and reveal their locations. His abilities make him perfect for gathering intelligence and protecting sites."
  },
  {
    name: "Viper",
    role: "Controller",
    image: "img/agents/viper.png",
    description: "A toxic controller who can create poisonous clouds and walls to control the battlefield. Her abilities make her perfect for area denial and forcing enemies out of position."
  }
];

// Function to create agent cards
function createAgentCards() {
  const agentsGrid = document.querySelector('.agents-grid');
  
  agents.forEach(agent => {
    const card = document.createElement('div');
    card.className = 'agent-card';
    
    card.innerHTML = `
      <img src="${agent.image}" alt="${agent.name}" class="agent-image">
      <div class="agent-info">
        <h3 class="agent-name">${agent.name}</h3>
        <p class="agent-role">${agent.role}</p>
        <p class="agent-description">${agent.description}</p>
      </div>
    `;
    
    agentsGrid.appendChild(card);
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  createAgentCards();
  
  // Add animation delay to cards
  const cards = document.querySelectorAll('.agent-card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
}); 