console.log("Wedding Invitation Loaded");
function copyText(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert("Nomor berhasil disalin");
    })
    .catch(() => {

      // fallback mobile/browser lama
      const input = document.createElement("input");
      input.value = text;

      document.body.appendChild(input);

      input.select();
      input.setSelectionRange(0, 99999);

      document.execCommand("copy");

      document.body.removeChild(input);

      alert("Nomor berhasil disalin");
    });
}

function bukaUndangan(){

  const cover = document.getElementById('coverPintu');

  cover.classList.add('buka');

  setTimeout(() => {
    cover.style.display = 'none';
  }, 1600);

  const musik = document.getElementById('musik');

  if(musik){
    musik.play();
  }
}