// Interactive Features for Tech Brutalist Portfolio
document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileToggle.textContent = navLinks.classList.contains('active') ? '[CLOSE]' : '[MENU]';
    });

    // Close mobile menu on nav link click
    document.querySelectorAll('.nav-link-item').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.textContent = '[MENU]';
      });
    });
  }

  // 2. Terminal Typewriter Simulation
  const typewriterElement = document.getElementById('typewriterText');
  if (typewriterElement) {
    const typewriterLines = [
      '> Initializing Anugrah Singh system environment...',
      '> Loading AI Multi-Agent Orchestration Engine [OK]',
      '> Connecting 51 REST API routes on PostgreSQL [OK]',
      '> Synchronizing Socket.IO real-time rooms [OK]',
      '> Status: All systems operational. Ready for deployment.'
    ];

    let lineIndex = 0;
    let charIndex = 0;

    function typeNextChar() {
      if (lineIndex < typewriterLines.length) {
        const currentLine = typewriterLines[lineIndex];
        if (charIndex < currentLine.length) {
          typewriterElement.innerHTML += currentLine.charAt(charIndex);
          charIndex++;
          setTimeout(typeNextChar, 25);
        } else {
          typewriterElement.innerHTML += '<br>';
          lineIndex++;
          charIndex = 0;
          setTimeout(typeNextChar, 300);
        }
      }
    }

    setTimeout(typeNextChar, 500);
  }

  // 3. Interactive Command Console Simulator
  const cmdInput = document.getElementById('cmdInput');
  const cmdLogs = document.getElementById('cmdLogs');

  if (cmdInput && cmdLogs) {
    cmdInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const command = cmdInput.value.trim().toLowerCase();
        cmdInput.value = '';

        if (!command) return;

        // Print command executed
        appendLog(`<span style="color: #00ff66;">$ ${command}</span>`);

        switch (command) {
          case 'help':
            appendLog('Available commands: <span style="color: #00e5ff;">contact, projects, skills, status, clear</span>');
            break;
          case 'contact':
            appendLog('Email: anugrahsinngh@gmail.com | Phone: +91 9565540240');
            break;
          case 'projects':
            appendLog('1. AI Hunger Games (ai-hunger-games-nine.vercel.app)');
            appendLog('2. SAAS Team Workspace (saas-team-workspace.vercel.app)');
            break;
          case 'skills':
            appendLog('Languages: TS, JS, Python | Web: React, Next.js, FastAPI, Node.js, Express, Postgres');
            break;
          case 'status':
            appendLog('Status: Open for Full-Stack & AI Engineering opportunities.');
            break;
          case 'clear':
            cmdLogs.innerHTML = '';
            break;
          default:
            appendLog(`Command not recognized: '${command}'. Type <span style="color: #00e5ff;">'help'</span>.`);
            break;
        }

        cmdLogs.scrollTop = cmdLogs.scrollHeight;
      }
    });

    function appendLog(htmlContent) {
      const line = document.createElement('div');
      line.innerHTML = htmlContent;
      cmdLogs.appendChild(line);
    }
  }

});
