import '../../../../lib/ai-chat-interface';
import '../../../../lib/ai-gradient-container';
import '../../../../lib/ai-chat-header';
import '../../../../lib/ai-prompt';
import '../../../../lib/ai-user-message';
import '../../../../lib/ai-response-message';
import '../../../../lib/tools/ai-data-table/ai-data-table.ts';
import '../recipe-card.ts';

// Update active TOC link
function updateActiveLink(sectionId) {
  // Remove active class from all links
  document.querySelectorAll('.toc-link').forEach(link => {
    link.classList.remove('active');
  });

  // Add active class to current section link
  const activeLink = document.querySelector(`.toc-link[href="#${sectionId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

// Smooth scroll navigation for TOC links
function scrollToSection(sectionId, updateUrl = true) {
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // Update URL hash if requested
    if (updateUrl) {
      history.pushState(null, null, `#${sectionId}`);
    }

    // Update active link
    updateActiveLink(sectionId);
  }
}

// Handle TOC link clicks
document.querySelectorAll('.toc-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    scrollToSection(targetId, true);
  });
});

// Auto-scroll to section from URL hash on page load
function handleInitialHash() {
  const hash = window.location.hash.substring(1);
  if (hash) {
    // Wait a bit for the page to fully load before scrolling
    setTimeout(() => {
      scrollToSection(hash, false);
    }, 100);
  } else {
    // If no hash, default to first section
    setTimeout(() => {
      updateActiveLink('data-table-section');
    }, 100);
  }
}

// Handle browser back/forward navigation
window.addEventListener('popstate', () => {
  const hash = window.location.hash.substring(1);
  if (hash) {
    scrollToSection(hash, false);
  }
});

async function loadDataTableDemo() {
  try {
    const response = await fetch('./data/data-table.json');
    const tableData = await response.json();

    const dataTable = document.getElementById('demo-data-table');

    // Create a mock tool call object with the JSON data
    const mockToolCall = {
      id: 'data-table-demo',
      name: 'displayDataTable',
      args: tableData,
      result: null,
      status: 'completed'
    };

    // Set the tool call data on the component
    dataTable.toolCall = mockToolCall;
  } catch (error) {
    console.error('Failed to load data table demo:', error);
  }
}

async function loadRecipeCardDemo() {
  try {
    const response = await fetch('./data/recipe-card.json');
    const recipeData = await response.json();

    const recipeCard = document.getElementById('demo-recipe-card');

    // Create a mock tool call object with the JSON data
    const mockToolCall = {
      id: 'recipe-card-demo',
      name: 'displayRecipe',
      args: recipeData,
      result: null,
      status: 'completed'
    };

    // Set the tool call data on the component
    recipeCard.toolCall = mockToolCall;
  } catch (error) {
    console.error('Failed to load recipe card demo:', error);
  }
}

// Load both demos, then handle initial hash
Promise.all([loadDataTableDemo(), loadRecipeCardDemo()]).then(() => {
  console.log('All demos loaded successfully');
  // Handle initial URL hash after content is loaded
  handleInitialHash();
});