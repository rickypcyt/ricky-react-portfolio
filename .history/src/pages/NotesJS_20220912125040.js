export default function Info() {
  return (
    <main className="BodyNotes">
      <div class="popup-box">
        <div class="popup">
          <div class="content">
            <header>
              <p></p>
              <i class="uil uil-times"></i>
            </header>
            <form action="#">
              <div class="row title">
                <label>Title</label>
                <input type="text" spellcheck="false" />
              </div>
              <div class="row description">
                <label>Description</label>
                <textarea spellcheck="false"></textarea>
              </div>
              <button></button>
            </form>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <li class="add-box">
          <div class="icon">
            <i class="uil uil-plus"></i>
          </div>
          <p>Add new note</p>
        </li>
      </div>

      <script src="script.js"></script>
    </main>
  );
}
