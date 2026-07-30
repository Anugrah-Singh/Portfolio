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

  // 3. Interactive Hero Bash Console & Navigation Simulator
  const cmdInput = document.getElementById('cmdInput');
  const cmdLogs = document.getElementById('cmdLogs');

  if (cmdInput && cmdLogs) {
    cmdInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const command = cmdInput.value.trim().toLowerCase();
        cmdInput.value = '';

        if (!command) return;

        // Print executed command prompt
        appendLog(`<span style="color: #00ff66;">$ ${command}</span>`);

        switch (command) {
          case 'help':
            appendLog('Available commands: <span style="color: #00e5ff;">projects, skills, contact, honors, status, home, clear</span>');
            break;
          case 'projects':
            appendLog('-> Navigating to <span style="color: #00e5ff;">[02_PROJECTS]</span>...');
            appendLog('1. AI Hunger Games (ai-hunger-games-nine.vercel.app)');
            appendLog('2. SAAS Team Workspace (saas-team-workspace.vercel.app)');
            scrollToSection('projects');
            break;
          case 'skills':
            appendLog('-> Navigating to <span style="color: #00e5ff;">[03_SKILLS]</span>...');
            appendLog('Tech Stack: TypeScript, Python, React, Next.js, FastAPI, PostgreSQL, Agentic AI');
            scrollToSection('skills');
            break;
          case 'contact':
            appendLog('-> Navigating to <span style="color: #00e5ff;">[05_CONTACT]</span>...');
            appendLog('Email: anugrahsinngh@gmail.com | Phone: +91 9565540240');
            scrollToSection('contact');
            break;
          case 'honors':
          case 'achievements':
            appendLog('-> Navigating to <span style="color: #00e5ff;">[04_HONORS]</span>...');
            appendLog('4x Hackathon Winner | AI Multi-Agent Architect');
            scrollToSection('honors');
            break;
          case 'home':
          case 'hero':
            appendLog('-> Scrolling to top <span style="color: #00e5ff;">[01_HERO]</span>...');
            scrollToSection('hero');
            break;
          case 'status':
            appendLog('STATUS: <span style="color: #00e676;">[ONLINE]</span> Open for Full-Stack & AI Engineering roles.');
            break;
          case 'clear':
            cmdLogs.innerHTML = '<div style="color: #71717a;">Console cleared. Type <span style="color: #00e5ff;">\'help\'</span> for commands.</div>';
            break;
          default:
            appendLog(`Command not recognized: '<span style="color: #ff5f56;">${command}</span>'. Type <span style="color: #00e5ff;">'help'</span> for available commands.`);
            break;
        }

        cmdLogs.scrollTop = cmdLogs.scrollHeight;
      }
    });

    function appendLog(htmlContent) {
      const line = document.createElement('div');
      line.style.marginBottom = '2px';
      line.innerHTML = htmlContent;
      cmdLogs.appendChild(line);
    }

    function scrollToSection(sectionId) {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    }
  }

});
