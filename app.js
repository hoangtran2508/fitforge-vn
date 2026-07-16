const EXERCISES = [
  {
    id: "bodyweight-squat", name: "Bodyweight Squat", muscle: "Chân", level: "Cơ bản", equipment: "Không dụng cụ", color: "mint", duration: 8,
    short: "Bài tập nền tảng giúp rèn sức mạnh chân và khả năng kiểm soát cơ thể.",
    steps: ["Đứng hai chân rộng gần bằng vai, mũi chân hướng nhẹ ra ngoài.", "Hít vào, đẩy hông ra sau và hạ người như đang ngồi xuống ghế.", "Giữ ngực mở, đầu gối đi cùng hướng với mũi chân.", "Dồn lực đều qua bàn chân và đứng lên, thở ra."],
    tip: "Hạ thấp đến mức bạn vẫn giữ lưng tự nhiên và kiểm soát được đầu gối."
  },
  {
    id: "incline-push-up", name: "Incline Push-up", muscle: "Ngực", level: "Cơ bản", equipment: "Ghế / bàn chắc chắn", color: "coral", duration: 7,
    short: "Biến thể chống đẩy thân thiện, dễ kiểm soát hơn chống đẩy trên sàn.",
    steps: ["Đặt hai tay lên bề mặt chắc chắn, rộng hơn vai một chút.", "Bước chân ra sau để cơ thể tạo thành một đường thẳng.", "Co khuỷu tay, hạ ngực về phía điểm tựa trong kiểm soát.", "Đẩy người về vị trí đầu mà không võng lưng."],
    tip: "Điểm tựa càng cao thì bài càng nhẹ. Chỉ hạ thấp điểm tựa khi kỹ thuật đã ổn định."
  },
  {
    id: "glute-bridge", name: "Glute Bridge", muscle: "Chân", level: "Cơ bản", equipment: "Thảm tập", color: "yellow", duration: 7,
    short: "Rèn nhóm cơ mông và khả năng giữ ổn định vùng hông.",
    steps: ["Nằm ngửa, co gối và đặt bàn chân vững trên sàn.", "Siết nhẹ bụng, giữ xương sườn không bật lên.", "Đẩy qua bàn chân để nâng hông đến khi thân tạo đường thẳng.", "Dừng ngắn ở trên rồi hạ xuống chậm rãi."],
    tip: "Không cần nâng hông quá cao; tránh ưỡn lưng để cố tăng biên độ."
  },
  {
    id: "one-arm-row", name: "One-arm Row", muscle: "Lưng", level: "Trung bình", equipment: "Tạ tay", color: "blue", duration: 10,
    short: "Tập trung vào cơ lưng với động tác kéo tạ có điểm tựa ổn định.",
    steps: ["Chống một tay lên ghế, giữ lưng ở tư thế tự nhiên.", "Tay còn lại cầm tạ, để vai thả tự nhiên nhưng vẫn kiểm soát.", "Kéo khuỷu tay về phía hông, không xoay người.", "Hạ tạ chậm đến khi tay gần duỗi thẳng rồi lặp lại."],
    tip: "Chọn mức tạ cho phép bạn kéo bằng lưng thay vì giật người lấy đà."
  },
  {
    id: "dead-bug", name: "Dead Bug", muscle: "Bụng", level: "Cơ bản", equipment: "Thảm tập", color: "lavender", duration: 6,
    short: "Bài tập kiểm soát thân giữa, phối hợp tay chân và nhịp thở.",
    steps: ["Nằm ngửa, nâng hai tay lên và co hông, gối khoảng 90 độ.", "Thở ra nhẹ, giữ vùng lưng dưới ổn định trên thảm.", "Duỗi chậm một tay và chân đối diện ra xa.", "Trở về giữa rồi đổi bên, luôn duy trì kiểm soát."],
    tip: "Giảm biên độ tay chân nếu lưng dưới bắt đầu rời khỏi vị trí ổn định."
  },
  {
    id: "dumbbell-press", name: "Dumbbell Floor Press", muscle: "Ngực", level: "Trung bình", equipment: "Tạ tay + thảm", color: "mint", duration: 9,
    short: "Động tác đẩy ngực với biên độ được sàn giới hạn, dễ kiểm soát.",
    steps: ["Nằm ngửa, co gối, mỗi tay giữ một tạ ở ngang ngực.", "Đặt cánh tay chếch khoảng 30–45 độ so với thân.", "Đẩy tạ lên trên đến khi tay gần thẳng, không khóa khuỷu mạnh.", "Hạ tạ từ từ đến khi tay trên chạm sàn nhẹ."],
    tip: "Giữ cổ tay thẳng trên khuỷu tay và không để tạ va vào nhau."
  },
  {
    id: "reverse-lunge", name: "Reverse Lunge", muscle: "Chân", level: "Trung bình", equipment: "Không dụng cụ", color: "coral", duration: 9,
    short: "Bài tập từng chân giúp rèn thăng bằng và kiểm soát đầu gối.",
    steps: ["Đứng thẳng, hai chân rộng bằng hông.", "Bước một chân ra sau và hạ gối trong tầm kiểm soát.", "Giữ thân ổn định, đầu gối trước cùng hướng với bàn chân.", "Đẩy qua chân trước để trở lại rồi đổi bên."],
    tip: "Có thể bám nhẹ vào điểm tựa chắc chắn nếu bạn đang làm quen với thăng bằng."
  },
  {
    id: "shoulder-press", name: "Seated Shoulder Press", muscle: "Vai", level: "Trung bình", equipment: "Tạ tay + ghế", color: "yellow", duration: 9,
    short: "Phát triển sức mạnh đẩy qua đầu với tư thế ngồi ổn định.",
    steps: ["Ngồi vững trên ghế, bàn chân đặt chắc trên sàn.", "Giữ tạ ở hai bên vai, cổ tay thẳng và khuỷu hơi hướng ra trước.", "Đẩy tạ lên trong tầm kiểm soát mà không ưỡn lưng.", "Hạ tạ về ngang vai một cách chậm rãi."],
    tip: "Nếu phải ưỡn lưng hoặc nhún người, hãy giảm mức tạ hoặc số lần."
  },
  {
    id: "bird-dog", name: "Bird Dog", muscle: "Toàn thân", level: "Cơ bản", equipment: "Thảm tập", color: "blue", duration: 6,
    short: "Rèn ổn định thân giữa và phối hợp chéo giữa tay với chân.",
    steps: ["Chống hai tay và hai gối, tay dưới vai và gối dưới hông.", "Siết nhẹ bụng để lưng giữ vị trí tự nhiên.", "Duỗi một tay cùng chân đối diện đến khi gần song song sàn.", "Dừng ngắn, trở về chậm rồi đổi bên."],
    tip: "Tưởng tượng đặt một ly nước trên lưng để hạn chế xoay hông."
  },
  {
    id: "calf-raise", name: "Standing Calf Raise", muscle: "Chân", level: "Cơ bản", equipment: "Không dụng cụ", color: "lavender", duration: 6,
    short: "Bài tập đơn giản cho bắp chân, phù hợp ở nhiều không gian.",
    steps: ["Đứng cạnh một điểm tựa, hai chân rộng bằng hông.", "Dồn lực đều qua phần trước bàn chân và nâng gót.", "Dừng ngắn ở điểm cao, giữ thân thẳng.", "Hạ gót chậm về sàn rồi lặp lại."],
    tip: "Không bật nảy. Dùng điểm tựa để giữ thăng bằng, không kéo người lên."
  },
  {
    id: "plank", name: "Forearm Plank", muscle: "Bụng", level: "Trung bình", equipment: "Thảm tập", color: "mint", duration: 6,
    short: "Giữ thân người ổn định bằng khả năng phối hợp của nhiều nhóm cơ.",
    steps: ["Chống hai cẳng tay xuống thảm, khuỷu tay dưới vai.", "Duỗi chân và tạo một đường thẳng từ đầu đến gót.", "Siết nhẹ bụng và mông, tiếp tục thở đều.", "Kết thúc hiệp khi không còn giữ được tư thế ổn định."],
    tip: "Có thể chống gối để giảm độ khó. Chất lượng tư thế quan trọng hơn thời gian giữ."
  },
  {
    id: "wall-slide", name: "Wall Slide", muscle: "Vai", level: "Cơ bản", equipment: "Tường phẳng", color: "coral", duration: 5,
    short: "Động tác nhẹ giúp tập kiểm soát bả vai và chuyển động tay.",
    steps: ["Đứng tựa nhẹ lưng vào tường, bàn chân hơi bước ra trước.", "Đặt cánh tay lên tường ở tư thế thoải mái.", "Trượt tay lên cao trong phạm vi không gây khó chịu.", "Hạ tay chậm về vị trí bắt đầu và lặp lại."],
    tip: "Không ép tay sát tường bằng mọi giá; chỉ di chuyển trong tầm thoải mái."
  }
];

const colors = {
  mint: "#e1f5ed", coral: "#ffede8", yellow: "#fff7d8", blue: "#e7f1f7", lavender: "#f0eafa"
};

const figureSVG = (muscle) => {
  const commonStart = `<svg class="figure" viewBox="0 0 180 145" aria-hidden="true"><path class="ground" d="M18 128h144"/>`;
  const figures = {
    "Chân": `<circle cx="90" cy="28" r="11"/><path d="M86 39l-12 30 20 17 24-4M74 69l-21 12M94 86l-18 36M114 82l15 40M63 78l-6 20M124 82l16 15"/><path d="M48 122h29M125 122h27"/>`,
    "Ngực": `<circle cx="90" cy="31" r="10"/><path d="M81 41l-17 20 13 25 34 3 13 23M64 61l-31 25M33 86l-12 28M77 86l-28 27M111 89l-18 26M19 116h120"/><path d="M49 113l-7 9M94 115l-5 8"/>`,
    "Lưng": `<circle cx="88" cy="26" r="10"/><path d="M82 37L69 73l30 9 32-3M69 73l-16 49M99 82l13 40M65 54l-24 22M41 76l4 29M109 61l18 30M127 91h20"/><rect x="139" y="84" width="16" height="15" rx="3"/>`,
    "Bụng": `<circle cx="117" cy="52" r="10"/><path d="M107 56L78 70 54 95M78 70l34 25M54 95l-28 15M112 95l27 21M69 77l-19-35M50 42H25M102 87l12-33"/><path d="M22 112h131"/>`,
    "Vai": `<circle cx="90" cy="34" r="10"/><path d="M85 44l-9 33 28 2-5-35M76 57L51 40M51 40l-5-19M104 57l25-17M129 40l5-19M76 77l-10 45M104 79l10 43"/><rect x="36" y="11" width="21" height="9" rx="3"/><rect x="124" y="11" width="21" height="9" rx="3"/>`,
    "Toàn thân": `<circle cx="90" cy="30" r="10"/><path d="M85 40L73 72l24 13M73 72L48 66M48 66l-20 20M97 85l26 4M123 89l25-10M80 60l27-7M107 53l20-17M73 72l-12 48M97 85l8 36"/><path d="M49 123h24M96 123h23"/>`
  };
  return commonStart + (figures[muscle] || figures["Toàn thân"]) + `</svg>`;
};

const storage = {
  get(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
  set(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
};

let customExercises = storage.get("fitforge-custom", []);
let workout = storage.get("fitforge-workout", []);
let favorites = new Set(storage.get("fitforge-favorites", []));
let activeMuscle = "Tất cả";
let searchTerm = "";
let sortMode = "featured";
let toastTimer;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const allExercises = () => [...EXERCISES, ...customExercises];
const getExercise = (id) => allExercises().find(item => item.id === id);
const slugify = (text) => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const escapeHTML = (value = "") => value.replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#039;",'"':"&quot;"}[char]));

function renderFilters() {
  const muscles = ["Tất cả", "Toàn thân", "Ngực", "Lưng", "Chân", "Vai", "Bụng"];
  $("#muscle-filters").innerHTML = muscles.map(muscle => `<button class="filter-chip ${muscle === activeMuscle ? "active" : ""}" type="button" data-muscle="${muscle}">${muscle}</button>`).join("");
}

function renderExercises() {
  let exercises = allExercises().filter(item => {
    const haystack = `${item.name} ${item.muscle} ${item.equipment}`.toLowerCase();
    return (activeMuscle === "Tất cả" || item.muscle === activeMuscle) && haystack.includes(searchTerm.toLowerCase());
  });

  const levelRank = {"Cơ bản": 0, "Trung bình": 1, "Nâng cao": 2};
  if (sortMode === "easy") exercises.sort((a, b) => levelRank[a.level] - levelRank[b.level]);
  if (sortMode === "name") exercises.sort((a, b) => a.name.localeCompare(b.name, "vi"));

  $("#result-count").textContent = exercises.length;
  $("#empty-state").hidden = exercises.length > 0;
  $("#exercise-grid").innerHTML = exercises.map(item => {
    const inWorkout = workout.some(entry => entry.id === item.id);
    return `<article class="exercise-card">
      <div class="exercise-visual" style="--visual-bg:${colors[item.color] || colors.mint}">
        <span class="level-badge">${item.level}</span>
        <button class="favorite-button ${favorites.has(item.id) ? "active" : ""}" type="button" data-favorite="${item.id}" aria-label="${favorites.has(item.id) ? "Bỏ yêu thích" : "Thêm yêu thích"}">
          <svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/></svg>
        </button>
        ${figureSVG(item.muscle)}
      </div>
      <div class="exercise-body">
        <div class="exercise-meta"><span>${item.muscle}</span><span>${item.equipment || "Không dụng cụ"}</span></div>
        <h3>${escapeHTML(item.name)}</h3>
        <p>${escapeHTML(item.short)}</p>
        <div class="card-actions">
          <button class="button ${inWorkout ? "soft" : "primary"}" type="button" data-add="${item.id}">${inWorkout ? "✓ Đã thêm" : "+ Thêm vào buổi tập"}</button>
          <button class="detail-button" type="button" data-detail="${item.id}">Chi tiết</button>
        </div>
      </div>
    </article>`;
  }).join("");
}

function showToast(message) {
  clearTimeout(toastTimer);
  $("#toast p").textContent = message;
  $("#toast").classList.add("show");
  toastTimer = setTimeout(() => $("#toast").classList.remove("show"), 2200);
}

function addToWorkout(id) {
  if (workout.some(item => item.id === id)) {
    openDrawer();
    showToast("Bài này đã có trong buổi tập");
    return;
  }
  workout.push({ id, sets: 3, reps: 10, rest: 60, done: false });
  saveWorkout();
  renderExercises();
  renderWorkout();
  showToast("Đã thêm vào buổi tập");
}

function saveWorkout() {
  storage.set("fitforge-workout", workout);
}

function updateWorkoutSummary() {
  $("#builder-count").textContent = workout.length;
  $("#summary-exercises").textContent = workout.length;
  const totalSets = workout.reduce((sum, item) => sum + Number(item.sets || 0), 0);
  const totalMinutes = workout.reduce((sum, item) => {
    const exercise = getExercise(item.id);
    return sum + (exercise?.duration || 6) + Math.round((Number(item.rest || 0) * Number(item.sets || 0)) / 60);
  }, 0);
  $("#summary-sets").textContent = totalSets;
  $("#summary-time").textContent = `${totalMinutes}'`;
}

function renderWorkout() {
  const list = $("#workout-list");
  const empty = $("#drawer-empty");
  list.hidden = workout.length === 0;
  empty.hidden = workout.length > 0;
  updateWorkoutSummary();
  list.innerHTML = workout.map((item, index) => {
    const exercise = getExercise(item.id);
    if (!exercise) return "";
    return `<div class="workout-item" data-workout-index="${index}">
      <div class="workout-item-head">
        <div class="drag-controls"><button type="button" data-move="up" aria-label="Chuyển lên" ${index === 0 ? "disabled" : ""}>▲</button><button type="button" data-move="down" aria-label="Chuyển xuống" ${index === workout.length - 1 ? "disabled" : ""}>▼</button></div>
        <div class="workout-item-title"><strong>${escapeHTML(exercise.name)}</strong><span>${exercise.muscle} · ${exercise.level}</span></div>
        <button class="remove-item" type="button" data-remove-workout aria-label="Xóa ${escapeHTML(exercise.name)}">×</button>
      </div>
      <div class="workout-inputs">
        <label>HIỆP<input type="number" inputmode="numeric" min="1" max="10" value="${item.sets}" data-field="sets"></label>
        <label>SỐ LẦN<input type="number" inputmode="numeric" min="1" max="100" value="${item.reps}" data-field="reps"></label>
        <label>NGHỈ (GIÂY)<input type="number" inputmode="numeric" min="0" max="600" step="5" value="${item.rest}" data-field="rest"></label>
      </div>
    </div>`;
  }).join("");
}

function openDrawer() {
  $("#drawer-backdrop").hidden = false;
  $("#workout-drawer").setAttribute("aria-hidden", "false");
  requestAnimationFrame(() => $("#workout-drawer").classList.add("open"));
  document.body.classList.add("locked");
  setTimeout(() => $("#close-builder").focus(), 250);
}

function closeDrawer() {
  $("#workout-drawer").classList.remove("open");
  $("#workout-drawer").setAttribute("aria-hidden", "true");
  document.body.classList.remove("locked");
  setTimeout(() => { $("#drawer-backdrop").hidden = true; }, 300);
}

function openDetail(id) {
  const exercise = getExercise(id);
  if (!exercise) return;
  $("#exercise-modal-content").innerHTML = `
    <div class="exercise-modal-hero" style="--modal-bg:${colors[exercise.color] || colors.mint}">
      <div>${figureSVG(exercise.muscle)}</div>
      <div><div class="modal-tags"><span>${exercise.muscle}</span><span>${exercise.level}</span><span>${escapeHTML(exercise.equipment || "Không dụng cụ")}</span></div><h2>${escapeHTML(exercise.name)}</h2><p>${escapeHTML(exercise.short)}</p></div>
    </div>
    <div class="modal-detail-body">
      <div><h3>Cách thực hiện</h3><ol class="instruction-list">${exercise.steps.map(step => `<li>${escapeHTML(step)}</li>`).join("")}</ol></div>
      <div><h3>Lưu ý kỹ thuật</h3><div class="tip-box"><strong>Gợi ý an toàn</strong><p>${escapeHTML(exercise.tip)}</p></div><button class="button primary full modal-action" type="button" data-modal-add="${exercise.id}">+ Thêm vào buổi tập</button></div>
    </div>`;
  $("#exercise-modal").showModal();
}

function closeDialog(dialog) {
  if (dialog.open) dialog.close();
}

function initEvents() {
  $("#muscle-filters").addEventListener("click", event => {
    const button = event.target.closest("[data-muscle]");
    if (!button) return;
    activeMuscle = button.dataset.muscle;
    renderFilters(); renderExercises();
  });

  $("#exercise-search").addEventListener("input", event => { searchTerm = event.target.value.trim(); renderExercises(); });
  $("#sort-exercises").addEventListener("change", event => { sortMode = event.target.value; renderExercises(); });
  document.addEventListener("keydown", event => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); $("#exercise-search").focus(); }
    if (event.key === "Escape" && $("#workout-drawer").classList.contains("open")) closeDrawer();
  });

  $("#exercise-grid").addEventListener("click", event => {
    const favorite = event.target.closest("[data-favorite]");
    const add = event.target.closest("[data-add]");
    const detail = event.target.closest("[data-detail]");
    if (favorite) {
      const id = favorite.dataset.favorite;
      favorites.has(id) ? favorites.delete(id) : favorites.add(id);
      storage.set("fitforge-favorites", [...favorites]); renderExercises();
    }
    if (add) addToWorkout(add.dataset.add);
    if (detail) openDetail(detail.dataset.detail);
  });

  ["#open-builder", "#hero-builder"].forEach(selector => $(selector).addEventListener("click", openDrawer));
  $("#close-builder").addEventListener("click", closeDrawer);
  $("#drawer-backdrop").addEventListener("click", closeDrawer);
  $("#browse-from-drawer").addEventListener("click", () => { closeDrawer(); setTimeout(() => $("#exercise-library").scrollIntoView(), 250); });

  $("#workout-list").addEventListener("click", event => {
    const item = event.target.closest("[data-workout-index]");
    if (!item) return;
    const index = Number(item.dataset.workoutIndex);
    if (event.target.closest("[data-remove-workout]")) {
      workout.splice(index, 1); saveWorkout(); renderWorkout(); renderExercises(); showToast("Đã xóa khỏi buổi tập");
    }
    const move = event.target.closest("[data-move]");
    if (move) {
      const target = move.dataset.move === "up" ? index - 1 : index + 1;
      if (target >= 0 && target < workout.length) [workout[index], workout[target]] = [workout[target], workout[index]];
      saveWorkout(); renderWorkout();
    }
  });
  $("#workout-list").addEventListener("input", event => {
    const input = event.target.closest("[data-field]");
    if (!input) return;
    const item = input.closest("[data-workout-index]");
    const index = Number(item.dataset.workoutIndex);
    const value = Math.max(Number(input.min), Math.min(Number(input.max), Number(input.value) || Number(input.min)));
    workout[index][input.dataset.field] = value; saveWorkout(); updateWorkoutSummary();
  });
  $("#workout-name").value = storage.get("fitforge-workout-name", "Buổi tập toàn thân");
  $("#workout-name").addEventListener("input", event => storage.set("fitforge-workout-name", event.target.value));
  $("#clear-workout").addEventListener("click", () => {
    if (!workout.length || !confirm("Xóa tất cả bài khỏi buổi tập này?")) return;
    workout = []; saveWorkout(); renderWorkout(); renderExercises(); showToast("Đã xóa buổi tập");
  });
  $("#start-workout").addEventListener("click", () => {
    if (!workout.length) { showToast("Hãy thêm ít nhất một bài tập"); return; }
    closeDrawer(); showToast("Buổi tập đã sẵn sàng — khởi động trước nhé!");
  });

  $("#exercise-modal").addEventListener("click", event => {
    if (event.target === $("#exercise-modal") || event.target.closest("[data-close-modal]")) closeDialog($("#exercise-modal"));
    const add = event.target.closest("[data-modal-add]");
    if (add) { addToWorkout(add.dataset.modalAdd); closeDialog($("#exercise-modal")); }
  });
  $("#add-custom").addEventListener("click", () => $("#custom-modal").showModal());
  $("#custom-modal").addEventListener("click", event => {
    if (event.target === $("#custom-modal") || event.target.closest("[data-close-custom]")) closeDialog($("#custom-modal"));
  });
  $("#custom-exercise-form").addEventListener("submit", event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const exercise = {
      id: `custom-${slugify(data.name)}-${Date.now()}`, name: data.name.trim(), muscle: data.muscle, level: data.level,
      equipment: data.equipment.trim() || "Không dụng cụ", color: "mint", duration: 6, custom: true,
      short: data.note.trim() || "Bài tập do bạn tự thêm vào thư viện cá nhân.",
      steps: [data.note.trim() || "Thực hiện bài tập trong phạm vi thoải mái và luôn kiểm soát chuyển động."],
      tip: "Ưu tiên kỹ thuật, bắt đầu vừa sức và dừng lại nếu có cảm giác đau bất thường."
    };
    customExercises.push(exercise); storage.set("fitforge-custom", customExercises);
    event.target.reset(); closeDialog($("#custom-modal")); renderExercises(); showToast("Đã lưu bài tập riêng");
  });
  $("#reset-data").addEventListener("click", () => {
    if (!confirm("Xóa toàn bộ buổi tập, bài riêng và mục yêu thích đã lưu?")) return;
    ["fitforge-custom", "fitforge-workout", "fitforge-favorites", "fitforge-workout-name"].forEach(key => localStorage.removeItem(key));
    customExercises = []; workout = []; favorites = new Set(); $("#workout-name").value = "Buổi tập toàn thân";
    renderExercises(); renderWorkout(); showToast("Đã xóa dữ liệu đã lưu");
  });
}

function init() {
  $("#current-year").textContent = new Date().getFullYear();
  renderFilters(); renderExercises(); renderWorkout(); initEvents();
}

init();
