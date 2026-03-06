
    const candidates = [
      {
        id: 1,
        name: "Rohan Shrivastava",
        avatar: "https://i.pravatar.cc/150?img=11",
        designation: "Senior Full Stack Developer",
        company: "Innovexa Labs",
        skills: ["Full Stack Development", "React", "Node.js"],
        phone: "917358239861",
        status: "new",
        recommended: true,
        location: "Bengaluru",
        experience: "5 years",
        languages: ["English", "Hindi"],
        summary: "Strong full stack engineer with experience building scalable SaaS platforms and internal tooling.",
        education: "B.Tech in Computer Science - VTU",
        otherDetails: "Open to hybrid roles. Notice period: 30 days.",
        experienceData: [
          {
            title: "Senior Full Stack Developer",
            company: "Innovexa Labs",
            period: "2022 - Present",
            description: "Led frontend architecture, API integrations, and internal HR workflow tools for enterprise teams."
          },
          {
            title: "Software Engineer",
            company: "Pixel Forge",
            period: "2020 - 2022",
            description: "Worked on React dashboards, hiring workflow automation, and performance optimization."
          }
        ]
      },
      {
        id: 2,
        name: "Prakash Mokashi",
        avatar: "https://i.pravatar.cc/150?img=12",
        designation: "Team Lead",
        company: "GrowthPoint Systems",
        skills: ["Decision Making", "Leadership"],
        phone: "919876543210",
        status: "new",
        recommended: false,
        location: "Pune",
        experience: "7 years",
        languages: ["English", "Marathi", "Hindi"],
        summary: "Experienced people manager with strong team leadership and stakeholder coordination skills.",
        education: "MBA - Operations",
        otherDetails: "Immediately available. Interested in people management roles.",
        experienceData: [
          {
            title: "Team Lead",
            company: "GrowthPoint Systems",
            period: "2021 - Present",
            description: "Managed cross-functional delivery teams and handled hiring coordination."
          }
        ]
      },
      {
        id: 3,
        name: "Kedar Sanjay Say",
        avatar: "https://i.pravatar.cc/150?img=13",
        designation: "Marketing Executive",
        company: "GrowthHive Media",
        skills: ["Marketing Management", "SEO", "Brand Strategy"],
        phone: "918765432109",
        status: "maybe",
        recommended: false,
        location: "Mumbai",
        experience: "4 years",
        languages: ["English", "Hindi"],
        summary: "Performance-focused marketing candidate with strong brand planning and SEO execution skills.",
        education: "BBA - Marketing",
        otherDetails: "Looking for growth-stage marketing teams.",
        experienceData: [
          {
            title: "Marketing Executive",
            company: "GrowthHive Media",
            period: "2022 - Present",
            description: "Handled brand strategy, campaign optimization, and SEO execution."
          }
        ]
      },
      {
        id: 4,
        name: "Anurag Kumar Tiwari",
        avatar: "https://i.pravatar.cc/150?img=14",
        designation: "Power BI Developer",
        company: "TechSoft Solutions",
        skills: ["Power BI", "Python", "SQL"],
        phone: "917654321098",
        status: "shortlist",
        recommended: true,
        location: "Hyderabad",
        experience: "6 years",
        languages: ["English", "Hindi"],
        summary: "Analytics specialist with strong BI reporting, SQL modeling, and business dashboarding experience.",
        education: "B.Tech - Information Technology",
        otherDetails: "Available in 15 days. Strong stakeholder communication.",
        experienceData: [
          {
            title: "Power BI Developer",
            company: "TechSoft Solutions",
            period: "2021 - Present",
            description: "Built executive dashboards, HR reporting modules, and data pipelines."
          },
          {
            title: "BI Analyst",
            company: "DataArc",
            period: "2018 - 2021",
            description: "Created reporting solutions and automated KPI dashboards."
          }
        ]
      },
      {
        id: 5,
        name: "Pawan Kumar",
        avatar: "https://i.pravatar.cc/150?img=15",
        designation: "Embedded Systems Engineer",
        company: "Nova Embedded Labs",
        skills: ["USB/Modbus Protocol", "Embedded C", "Firmware"],
        phone: "916543210987",
        status: "new",
        recommended: false,
        location: "Chennai",
        experience: "5 years",
        languages: ["English", "Tamil"],
        summary: "Embedded engineer with hands-on firmware development and industrial communication protocol experience.",
        education: "B.E - Electronics",
        otherDetails: "Open to relocation.",
        experienceData: [
          {
            title: "Embedded Systems Engineer",
            company: "Nova Embedded Labs",
            period: "2020 - Present",
            description: "Developed firmware for industrial devices and handled integration testing."
          }
        ]
      },
      {
        id: 6,
        name: "K Lalu Prasad",
        avatar: "https://i.pravatar.cc/150?img=16",
        designation: "Frontend Developer",
        company: "BrightStack",
        skills: ["Web Application", "JavaScript", "Vue.js"],
        phone: "915432109876",
        status: "maybe",
        recommended: false,
        location: "Kochi",
        experience: "3 years",
        languages: ["English", "Malayalam"],
        summary: "Frontend developer with product UI experience and a clean visual systems mindset.",
        education: "B.Sc - Computer Applications",
        otherDetails: "Prefers remote-first teams.",
        experienceData: [
          {
            title: "Frontend Developer",
            company: "BrightStack",
            period: "2022 - Present",
            description: "Worked on admin panels, user flows, and ATS-like enterprise dashboards."
          }
        ]
      },
      // {
      //   id: 7,
      //   name: "Ritik Prasad",
      //   avatar: "https://i.pravatar.cc/150?img=17",
      //   designation: "Data Analyst",
      //   company: "Insight Metrics",
      //   skills: ["Data Analysis", "Python", "Pandas"],
      //   phone: "914321098765",
      //   status: "new",
      //   recommended: false,
      //   location: "Delhi",
      //   experience: "4 years",
      //   languages: ["English", "Hindi"],
      //   summary: "Business data analyst skilled in reporting, data cleaning, and decision support dashboards.",
      //   education: "B.Tech - Data Science",
      //   otherDetails: "Immediate joiner.",
      //   experienceData: [
      //     {
      //       title: "Data Analyst",
      //       company: "Insight Metrics",
      //       period: "2021 - Present",
      //       description: "Built insights reports and automated data analysis workflows."
      //     }
      //   ]
      // },
      // {
      //   id: 8,
      //   name: "Gokul",
      //   avatar: "https://i.pravatar.cc/150?img=18",
      //   designation: "Chemical Process Engineer",
      //   company: "NA",
      //   skills: ["Process Technology", "Chemical Eng", "Operations"],
      //   phone: "913210987654",
      //   status: "reject",
      //   recommended: false,
      //   location: "Coimbatore",
      //   experience: "6 years",
      //   languages: ["English", "Tamil"],
      //   summary: "Process engineer with operations and plant performance experience.",
      //   education: "B.Tech - Chemical Engineering",
      //   otherDetails: "Open to manufacturing roles.",
      //   experienceData: [
      //     {
      //       title: "Chemical Process Engineer",
      //       company: "PlantCore",
      //       period: "2019 - Present",
      //       description: "Handled process optimization, documentation, and plant operations."
      //     }
      //   ]
      // },
      // {
      //   id: 9,
      //   name: "Surendra GN",
      //   avatar: "https://i.pravatar.cc/150?img=19",
      //   designation: "C Programmer",
      //   company: "Not mentioned",
      //   skills: ["C Programmer", "Linux", "System Programming"],
      //   phone: "912109876543",
      //   status: "new",
      //   recommended: false,
      //   location: "Mysuru",
      //   experience: "5 years",
      //   languages: ["English", "Kannada"],
      //   summary: "Systems-focused engineer with strong Linux, C, and low-level programming capability.",
      //   education: "B.E - Computer Science",
      //   otherDetails: "Interested in core systems roles.",
      //   experienceData: [
      //     {
      //       title: "Systems Programmer",
      //       company: "KernelWorks",
      //       period: "2020 - Present",
      //       description: "Worked on device-level code and Linux-based systems projects."
      //     }
      //   ]
      // },
      // {
      //   id: 10,
      //   name: "Sharif",
      //   avatar: "https://i.pravatar.cc/150?img=20",
      //   designation: "BI Analyst",
      //   company: "Sigma Insights",
      //   skills: ["SQL", "Excel", "Python"],
      //   phone: "911098765432",
      //   status: "shortlist",
      //   recommended: true,
      //   location: "Bengaluru",
      //   experience: "5 years",
      //   languages: ["English", "Urdu", "Hindi"],
      //   summary: "Strong reporting and analytics candidate with clean dashboarding and business insights experience.",
      //   education: "B.Com + Analytics Certification",
      //   otherDetails: "Looking for growth teams with business ownership.",
      //   experienceData: [
      //     {
      //       title: "BI Analyst",
      //       company: "Sigma Insights",
      //       period: "2021 - Present",
      //       description: "Created reporting dashboards and analytical models for business operations."
      //     }
      //   ]
      // }
    ];

    const statusMeta = {
      new: { label: "Set Status", className: "", dot: "shortlist" },
      shortlist: { label: "Shortlist", className: "status-shortlist", dot: "shortlist" },
      maybe: { label: "Maybe", className: "status-maybe", dot: "maybe" },
      reject: { label: "Reject", className: "status-reject", dot: "reject" }
    };

    let currentPreviewIndex = 0;
    let filteredIndexes = [];
    let activeFilter = "all";
    let searchQuery = "";
    let addCandidateModal;

    const visibleColumns = {
      designation: true,
      company: true,
      skills: true,
      phone: true
    };

    document.addEventListener("DOMContentLoaded", function () {
      addCandidateModal = new bootstrap.Modal(document.getElementById("addCandidateModal"));
      setupEventListeners();
      renderAll();
    });

    function setupEventListeners() {
      document.getElementById("menuToggle").addEventListener("click", function () {
        document.getElementById("sidebar").classList.toggle("show");
        document.getElementById("sidebarOverlay").classList.toggle("show");
      });

      document.getElementById("sidebarOverlay").addEventListener("click", function () {
        document.getElementById("sidebar").classList.remove("show");
        document.getElementById("sidebarOverlay").classList.remove("show");
      });

      document.getElementById("filterToggle").addEventListener("click", function () {
        document.getElementById("filterContent").classList.toggle("show");
        this.querySelector("i").classList.toggle("bi-chevron-up");
        this.querySelector("i").classList.toggle("bi-chevron-down");
      });

      document.querySelectorAll(".filter-tab").forEach(tab => {
        tab.addEventListener("click", function () {
          document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
          this.classList.add("active");
          activeFilter = this.dataset.filter;
          renderAll();
        });
      });

      document.getElementById("tableSearch").addEventListener("input", function () {
        searchQuery = this.value.trim().toLowerCase();
        renderAll();
      });

      document.getElementById("selectAll").addEventListener("change", function () {
        document.querySelectorAll(".row-checkbox").forEach(cb => {
          cb.checked = this.checked;
        });
      });

      document.getElementById("btnCustomize").addEventListener("click", openDrawer);
      document.getElementById("closeDrawer").addEventListener("click", closeDrawer);
      document.getElementById("cancelColumns").addEventListener("click", closeDrawer);
      document.getElementById("drawerOverlay").addEventListener("click", closeDrawer);

      document.getElementById("applyColumns").addEventListener("click", function () {
        visibleColumns.designation = document.getElementById("col-designation").checked;
        visibleColumns.company = document.getElementById("col-company").checked;
        visibleColumns.skills = document.getElementById("col-skills").checked;
        visibleColumns.phone = document.getElementById("col-phone").checked;
        applyColumnVisibility();
        closeDrawer();
      });

      document.getElementById("closePreviewPanel").addEventListener("click", closePreviewPanel);
      document.getElementById("previewOverlay").addEventListener("click", closePreviewPanel);

      document.getElementById("prevCandidateBtn").addEventListener("click", showPrevCandidate);
      document.getElementById("nextCandidateBtn").addEventListener("click", showNextCandidate);

      document.querySelectorAll(".preview-tab").forEach(tab => {
        tab.addEventListener("click", function () {
          document.querySelectorAll(".preview-tab").forEach(t => t.classList.remove("active"));
          document.querySelectorAll(".preview-tab-content").forEach(c => c.classList.remove("active"));
          this.classList.add("active");
          document.getElementById(`tab-${this.dataset.tab}`).classList.add("active");
        });
      });

      document.getElementById("previewStatusBtn").addEventListener("click", function (e) {
        e.stopPropagation();
        const menu = this.nextElementSibling;
        document.querySelectorAll(".status-menu").forEach(m => {
          if (m !== menu) m.classList.remove("show");
        });
        menu.classList.toggle("show");
      });

      document.querySelector("#previewStatusBtn + .status-menu").querySelectorAll(".status-item").forEach(item => {
        item.addEventListener("click", function () {
          updateCandidateStatus(candidates[currentPreviewIndex].id, this.dataset.status);
          this.parentElement.classList.remove("show");
        });
      });

      document.getElementById("previewShortlistBtn").addEventListener("click", () => {
        updateCandidateStatus(candidates[currentPreviewIndex].id, "shortlist");
      });

      document.getElementById("previewMaybeBtn").addEventListener("click", () => {
        updateCandidateStatus(candidates[currentPreviewIndex].id, "maybe");
      });

      document.getElementById("previewRejectBtn").addEventListener("click", () => {
        updateCandidateStatus(candidates[currentPreviewIndex].id, "reject");
      });

      document.getElementById("previewDeleteBtn").addEventListener("click", function () {
        deleteCandidate(candidates[currentPreviewIndex].id);
      });

      document.getElementById("addCandidateForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("candidateNameInput").value.trim();
        const phone = document.getElementById("candidatePhoneInput").value.trim();
        const designation = document.getElementById("candidateDesignationInput").value.trim() || "Not mentioned";
        const company = document.getElementById("candidateCompanyInput").value.trim() || "Not mentioned";
        const location = document.getElementById("candidateLocationInput").value.trim() || "Not mentioned";
        const experience = document.getElementById("candidateExperienceInput").value.trim() || "Not mentioned";
        const skillsRaw = document.getElementById("candidateSkillsInput").value.trim();
        const skills = skillsRaw ? skillsRaw.split(",").map(s => s.trim()).filter(Boolean) : ["General"];

        candidates.unshift({
          id: Date.now(),
          name,
          avatar: `https://i.pravatar.cc/150?u=${Date.now()}`,
          designation,
          company,
          skills,
          phone,
          status: "new",
          recommended: false,
          location,
          experience,
          languages: ["English"],
          summary: `${designation} candidate added from ATS dashboard.`,
          education: "Not added yet",
          otherDetails: "Candidate profile created manually.",
          experienceData: [
            {
              title: designation,
              company,
              period: "Recently Added",
              description: "Candidate profile manually created from recruiter dashboard."
            }
          ]
        });

        this.reset();
        addCandidateModal.hide();
        renderAll();
      });

      document.addEventListener("click", function (e) {
        if (!e.target.closest(".status-dropdown")) {
          document.querySelectorAll(".status-menu").forEach(menu => menu.classList.remove("show"));
        }

        if (!e.target.closest(".action-menu")) {
          document.querySelectorAll(".action-dropdown").forEach(menu => menu.classList.remove("show"));
        }
      });

      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          closePreviewPanel();
          closeDrawer();
        }
      });
    }

    function openDrawer() {
      document.getElementById("customizeDrawer").classList.add("show");
      document.getElementById("drawerOverlay").classList.add("show");
    }

    function closeDrawer() {
      document.getElementById("customizeDrawer").classList.remove("show");
      document.getElementById("drawerOverlay").classList.remove("show");
    }

    function renderAll() {
      filteredIndexes = getFilteredIndexes();
      renderCounts();
      renderTable();
      renderMobileCards();
      updateMetaInfo();
      applyColumnVisibility();
    }

    function getFilteredIndexes() {
      return candidates
        .map((candidate, index) => ({ candidate, index }))
        .filter(({ candidate }) => {
          const matchesFilter = activeFilter === "all" ? true : candidate.status === activeFilter;
          const haystack = [
            candidate.name,
            candidate.designation,
            candidate.company,
            candidate.location,
            candidate.experience,
            candidate.phone,
            ...(candidate.skills || [])
          ].join(" ").toLowerCase();

          const matchesSearch = !searchQuery || haystack.includes(searchQuery);
          return matchesFilter && matchesSearch;
        })
        .map(item => item.index);
    }

    function renderCounts() {
      document.getElementById("countAll").textContent = candidates.length;
      document.getElementById("countShortlist").textContent = candidates.filter(c => c.status === "shortlist").length;
      document.getElementById("countMaybe").textContent = candidates.filter(c => c.status === "maybe").length;
      document.getElementById("countReject").textContent = candidates.filter(c => c.status === "reject").length;
      document.getElementById("sidebarCandidateCount").textContent = candidates.length;
    }

    function updateMetaInfo() {
      const visibleCount = filteredIndexes.length;
      document.getElementById("tableInfo").innerHTML = `Showing <strong>${visibleCount}</strong> of <strong>${candidates.length}</strong> responses`;
      document.getElementById("paginationInfo").textContent = `Showing ${visibleCount} result${visibleCount === 1 ? "" : "s"}`;
    }

    function getStatusButtonHTML(status) {
      const meta = statusMeta[status] || statusMeta.new;
      return `
        <span class="status-content ${meta.className}">
          <span class="status-dot ${meta.dot}"></span>
          <span>${meta.label}</span>
        </span>
        <i class="bi bi-chevron-down"></i>
      `;
    }

    function getSkillsHTML(skills = []) {
      const visibleSkills = skills.slice(0, 2);
      const remaining = skills.length - visibleSkills.length;

      return `
        <div class="skills-wrap">
          ${visibleSkills.map(skill => `<span class="skill-pill">${skill}</span>`).join("")}
          ${remaining > 0 ? `<span class="skill-pill more">+${remaining}</span>` : ""}
        </div>
      `;
    }

    function renderTable() {
      const tbody = document.getElementById("candidateTableBody");
      tbody.innerHTML = "";

      filteredIndexes.forEach(index => {
        const candidate = candidates[index];
        const row = document.createElement("tr");

        row.innerHTML = `
          <td class="col-checkbox sticky-col sticky-checkbox">
            <input type="checkbox" class="custom-checkbox row-checkbox">
          </td>

          <td class="col-avatar sticky-col sticky-avatar">
            <div class="avatar-cell">
              <img src="${candidate.avatar}" alt="${candidate.name}" class="candidate-avatar" onclick="openPreviewPanel(${index})">
            </div>
          </td>

          <td class="col-name sticky-col sticky-name" data-column="name">
            <div class="candidate-name-cell">
              <div class="candidate-info">
                <div class="candidate-name-row">
                  <span class="candidate-name" onclick="openPreviewPanel(${index})">${candidate.name}</span>
                  ${candidate.recommended ? '<span class="badge-recommended">Recommended</span>' : ""}
                </div>
                <div class="candidate-meta">${candidate.location} • ${candidate.experience}</div>
              </div>

              <button class="preview-trigger" onclick="openPreviewPanel(${index})" title="Preview Candidate">
                <i class="bi bi-eye"></i>
              </button>
            </div>
          </td>

          <td class="col-designation" data-column="designation">
            <div class="cell-primary">${candidate.designation}</div>
          </td>

          <td class="col-company" data-column="company">
            <div class="cell-primary">${candidate.company}</div>
          </td>

          <td class="col-skills" data-column="skills">
            ${getSkillsHTML(candidate.skills)}
          </td>

          <td class="col-phone" data-column="phone">
            <div class="phone-cell">
              <button class="btn-phone" onclick="togglePhoneInline(this, '${candidate.phone}')">
                <i class="bi bi-eye"></i>
                <span>Show contact details</span>
              </button>
              <div class="phone-inline">
                <i class="bi bi-telephone-fill"></i>
                <span>${candidate.phone}</span>
              </div>
            </div>
          </td>

          <td class="col-status" data-column="status">
            <div class="status-dropdown">
              <button class="btn-status" onclick="toggleStatusMenu(this)">
                ${getStatusButtonHTML(candidate.status)}
              </button>
              <div class="status-menu">
                <div class="status-item" onclick="updateCandidateStatus(${candidate.id}, 'shortlist')">
                  <span class="status-dot shortlist"></span>
                  Shortlist
                </div>
                <div class="status-item" onclick="updateCandidateStatus(${candidate.id}, 'maybe')">
                  <span class="status-dot maybe"></span>
                  Maybe
                </div>
                <div class="status-item" onclick="updateCandidateStatus(${candidate.id}, 'reject')">
                  <span class="status-dot reject"></span>
                  Reject
                </div>
              </div>
            </div>
          </td>

          <td class="col-actions">
            <div class="action-menu">
              <button class="btn-action-menu" onclick="toggleActionMenu(this)">
                <i class="bi bi-three-dots"></i>
              </button>
              <div class="action-dropdown">
                <div class="action-item">
                  <i class="bi bi-envelope"></i>
                  Email
                </div>
                <div class="action-item">
                  <i class="bi bi-forward"></i>
                  Forward
                </div>
                <div class="action-item delete" onclick="deleteCandidate(${candidate.id})">
                  <i class="bi bi-trash3"></i>
                  Delete
                </div>
              </div>
            </div>
          </td>
        `;

        tbody.appendChild(row);
      });
    }

    function renderMobileCards() {
      const container = document.getElementById("mobileCards");
      container.innerHTML = "";

      filteredIndexes.forEach(index => {
        const candidate = candidates[index];
        const card = document.createElement("div");
        card.className = "candidate-card";

        card.innerHTML = `
          <div class="card-header-mobile">
            <div class="card-candidate-info">
              <img src="${candidate.avatar}" alt="${candidate.name}" class="card-avatar" onclick="openPreviewPanel(${index})">

              <div class="card-name-section">
                <div class="card-name-top">
                  <h3 onclick="openPreviewPanel(${index})">${candidate.name}</h3>
                  ${candidate.recommended ? '<span class="badge-recommended">Recommended</span>' : ""}
                </div>
                <p class="card-designation">${candidate.designation}</p>
              </div>
            </div>

            <div class="action-menu">
              <button class="btn-action-menu" onclick="toggleActionMenu(this)">
                <i class="bi bi-three-dots"></i>
              </button>
              <div class="action-dropdown">
                <div class="action-item">
                  <i class="bi bi-envelope"></i>
                  Email
                </div>
                <div class="action-item">
                  <i class="bi bi-forward"></i>
                  Forward
                </div>
                <div class="action-item delete" onclick="deleteCandidate(${candidate.id})">
                  <i class="bi bi-trash3"></i>
                  Delete
                </div>
              </div>
            </div>
          </div>

          <div class="card-body-mobile">
            ${visibleColumns.company ? `
              <div class="card-row">
                <span class="card-label">Company</span>
                <span class="card-value">${candidate.company}</span>
              </div>` : ""}

            ${visibleColumns.skills ? `
              <div class="card-row">
                <span class="card-label">Skills</span>
                <div class="card-skills">
                  ${candidate.skills.slice(0, 3).map(skill => `<span class="skill-pill">${skill}</span>`).join("")}
                </div>
              </div>` : ""}
          </div>

          <div class="card-footer-mobile">
            ${visibleColumns.phone ? `
              <div class="card-phone-area">
                <button class="btn-phone" onclick="togglePhoneInline(this, '${candidate.phone}')">
                  <i class="bi bi-eye"></i>
                  <span>Show contact details</span>
                </button>
                <div class="phone-inline">
                  <i class="bi bi-telephone-fill"></i>
                  <span>${candidate.phone}</span>
                </div>
              </div>` : ""}

            <div class="card-status-wrap">
              <div class="status-dropdown">
                <button class="btn-status" onclick="toggleStatusMenu(this)">
                  ${getStatusButtonHTML(candidate.status)}
                </button>
                <div class="status-menu">
                  <div class="status-item" onclick="updateCandidateStatus(${candidate.id}, 'shortlist')">
                    <span class="status-dot shortlist"></span>
                    Shortlist
                  </div>
                  <div class="status-item" onclick="updateCandidateStatus(${candidate.id}, 'maybe')">
                    <span class="status-dot maybe"></span>
                    Maybe
                  </div>
                  <div class="status-item" onclick="updateCandidateStatus(${candidate.id}, 'reject')">
                    <span class="status-dot reject"></span>
                    Reject
                  </div>
                </div>
              </div>
            </div>

            <button class="btn-phone" onclick="openPreviewPanel(${index})">
              <i class="bi bi-eye"></i>
              View Profile
            </button>
          </div>
        `;

        container.appendChild(card);
      });
    }

    function applyColumnVisibility() {
      document.querySelectorAll('[data-column="designation"]').forEach(el => {
        el.classList.toggle("hide-col", !visibleColumns.designation);
      });
      document.querySelectorAll('[data-column="company"]').forEach(el => {
        el.classList.toggle("hide-col", !visibleColumns.company);
      });
      document.querySelectorAll('[data-column="skills"]').forEach(el => {
        el.classList.toggle("hide-col", !visibleColumns.skills);
      });
      document.querySelectorAll('[data-column="phone"]').forEach(el => {
        el.classList.toggle("hide-col", !visibleColumns.phone);
      });
    }

    function togglePhoneInline(btn, phone) {
      const parent = btn.closest(".phone-cell, .card-phone-area");
      const phoneBlock = parent.querySelector(".phone-inline");
      const label = btn.querySelector("span");
      const icon = btn.querySelector("i");
      const isOpen = phoneBlock.classList.contains("show");

      document.querySelectorAll(".phone-inline.show").forEach(el => {
        if (el !== phoneBlock) {
          el.classList.remove("show");
          const blockParent = el.closest(".phone-cell, .card-phone-area");
          if (blockParent) {
            const blockBtn = blockParent.querySelector(".btn-phone");
            if (blockBtn) {
              blockBtn.querySelector("span").textContent = "Show contact details";
              blockBtn.querySelector("i").className = "bi bi-eye";
            }
          }
        }
      });

      if (isOpen) {
        phoneBlock.classList.remove("show");
        label.textContent = "Show contact details";
        icon.className = "bi bi-eye";
      } else {
        phoneBlock.classList.add("show");
        phoneBlock.querySelector("span").textContent = phone;
        label.textContent = "Hide contact details";
        icon.className = "bi bi-eye-slash";
      }
    }

    function toggleStatusMenu(btn) {
      const menu = btn.nextElementSibling;
      const isOpen = menu.classList.contains("show");
      document.querySelectorAll(".status-menu").forEach(m => m.classList.remove("show"));
      if (!isOpen) menu.classList.add("show");
    }

    function toggleActionMenu(btn) {
      const menu = btn.nextElementSibling;
      const isOpen = menu.classList.contains("show");
      document.querySelectorAll(".action-dropdown").forEach(m => m.classList.remove("show"));
      if (!isOpen) menu.classList.add("show");
    }

    function updateCandidateStatus(candidateId, status) {
      const candidate = candidates.find(c => c.id === candidateId);
      if (!candidate) return;

      candidate.status = status;
      renderAll();

      const openCandidate = candidates[currentPreviewIndex];
      if (openCandidate && openCandidate.id === candidateId && document.getElementById("candidatePreviewPanel").classList.contains("show")) {
        populatePreview(candidate);
      }

      document.querySelectorAll(".status-menu").forEach(m => m.classList.remove("show"));
    }

    function deleteCandidate(candidateId) {
      const index = candidates.findIndex(c => c.id === candidateId);
      if (index === -1) return;

      const shouldDelete = confirm("Delete this candidate?");
      if (!shouldDelete) return;

      const wasPreviewOpen = document.getElementById("candidatePreviewPanel").classList.contains("show");
      const deletingCurrent = wasPreviewOpen && candidates[currentPreviewIndex] && candidates[currentPreviewIndex].id === candidateId;

      candidates.splice(index, 1);
      renderAll();

      if (candidates.length === 0) {
        closePreviewPanel();
        return;
      }

      if (deletingCurrent) {
        currentPreviewIndex = Math.min(index, candidates.length - 1);
        populatePreview(candidates[currentPreviewIndex]);
      } else if (wasPreviewOpen) {
        const currentCandidateId = candidates[currentPreviewIndex]?.id;
        const newIndex = candidates.findIndex(c => c.id === currentCandidateId);
        currentPreviewIndex = newIndex >= 0 ? newIndex : 0;
        populatePreview(candidates[currentPreviewIndex]);
      }
    }

    function openPreviewPanel(index) {
      currentPreviewIndex = index;
      populatePreview(candidates[index]);
      document.getElementById("candidatePreviewPanel").classList.add("show");
      document.getElementById("previewOverlay").classList.add("show");
      document.body.style.overflow = "hidden";
    }

    function closePreviewPanel() {
      document.getElementById("candidatePreviewPanel").classList.remove("show");
      document.getElementById("previewOverlay").classList.remove("show");
      document.body.style.overflow = "";
      document.querySelectorAll(".status-menu").forEach(menu => menu.classList.remove("show"));
    }

    function showPrevCandidate() {
      if (!candidates.length) return;
      currentPreviewIndex = (currentPreviewIndex - 1 + candidates.length) % candidates.length;
      populatePreview(candidates[currentPreviewIndex]);
    }

    function showNextCandidate() {
      if (!candidates.length) return;
      currentPreviewIndex = (currentPreviewIndex + 1) % candidates.length;
      populatePreview(candidates[currentPreviewIndex]);
    }

    function populatePreview(candidate) {
      document.getElementById("previewAvatar").src = candidate.avatar;
      document.getElementById("previewAvatar").alt = candidate.name;
      document.getElementById("previewName").textContent = candidate.name;
      document.getElementById("previewSummaryLine").textContent =
        `${candidate.designation} at ${candidate.company} • ${candidate.location} • ${candidate.experience}`;
      document.getElementById("previewPhone").textContent = candidate.phone;

      const recommendedBadge = document.getElementById("previewRecommendedBadge");
      recommendedBadge.style.display = candidate.recommended ? "inline-flex" : "none";

      document.getElementById("previewStatusBtn").innerHTML = getStatusButtonHTML(candidate.status);

      document.getElementById("tabSummaryRole").textContent = candidate.designation;
      document.getElementById("tabSummaryCompany").textContent = candidate.company;
      document.getElementById("tabSummaryText").textContent = candidate.summary;

      document.getElementById("tabExperience").innerHTML = (candidate.experienceData || []).map(item => `
        <div class="timeline-item">
          <div class="timeline-title">${item.title}</div>
          <div class="timeline-subtitle">${item.company} • ${item.period}</div>
          <div class="timeline-desc">${item.description}</div>
        </div>
      `).join("");

      document.getElementById("tabEducation").innerHTML = `
        <div class="info-item">
          <div class="info-item-label">Highest Qualification</div>
          <div class="info-item-value">${candidate.education || "Not provided"}</div>
        </div>
      `;

      document.getElementById("tabSkills").innerHTML = (candidate.skills || []).map(skill =>
        `<span class="skill-pill">${skill}</span>`
      ).join("");

      document.getElementById("tabLanguages").innerHTML = (candidate.languages || []).map(lang => `
        <div class="info-item">
          <div class="info-item-label">Language</div>
          <div class="info-item-value">${lang}</div>
        </div>
      `).join("");

      document.getElementById("tabOther").innerHTML = `
        <div class="info-item">
          <div class="info-item-label">Location</div>
          <div class="info-item-value">${candidate.location}</div>
        </div>
        <div class="info-item">
          <div class="info-item-label">Experience</div>
          <div class="info-item-value">${candidate.experience}</div>
        </div>
        <div class="info-item">
          <div class="info-item-label">Notes</div>
          <div class="info-item-value">${candidate.otherDetails || "Not provided"}</div>
        </div>
      `;

      document.getElementById("resumePaper").innerHTML = `
        <h4>${candidate.name}</h4>
        <p><strong>${candidate.designation}</strong> • ${candidate.company}</p>
        <p>${candidate.summary}</p>
        <p><strong>Skills:</strong> ${(candidate.skills || []).join(", ")}</p>
        <p><strong>Experience:</strong> ${candidate.experience}</p>
        <p><strong>Education:</strong> ${candidate.education}</p>
        <p><strong>Other Details:</strong> ${candidate.otherDetails}</p>
      `;

      renderSimilarCandidates(candidate);

      document.querySelectorAll(".preview-tab").forEach(tab => tab.classList.remove("active"));
      document.querySelectorAll(".preview-tab-content").forEach(content => content.classList.remove("active"));
      document.querySelector('.preview-tab[data-tab="summary"]').classList.add("active");
      document.getElementById("tab-summary").classList.add("active");
    }

    function renderSimilarCandidates(currentCandidate) {
      const container = document.getElementById("similarCandidatesContainer");
      const currentIndex = candidates.findIndex(c => c.id === currentCandidate.id);

      const similar = candidates
        .map((candidate, index) => ({ candidate, index }))
        .filter(item => item.candidate.id !== currentCandidate.id)
        .slice(0, 3);

      container.innerHTML = similar.map(item => `
        <div class="similar-candidate-card" onclick="openPreviewPanel(${item.index})">
          <img src="${item.candidate.avatar}" alt="${item.candidate.name}" class="similar-avatar">
          <div class="similar-meta">
            <div class="similar-name">${item.candidate.name}</div>
            <div class="similar-sub">${item.candidate.experience} • ${item.candidate.location} • ${item.candidate.designation}</div>
            <div class="similar-skills">
              ${item.candidate.skills.slice(0, 3).map(skill => `<span class="skill-pill">${skill}</span>`).join("")}
            </div>
          </div>
        </div>
      `).join("");
    }

    window.openPreviewPanel = openPreviewPanel;
    window.togglePhoneInline = togglePhoneInline;
    window.toggleStatusMenu = toggleStatusMenu;
    window.toggleActionMenu = toggleActionMenu;
    window.updateCandidateStatus = updateCandidateStatus;
    window.deleteCandidate = deleteCandidate;
