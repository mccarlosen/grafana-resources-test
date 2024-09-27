document.addEventListener('DOMContentLoaded', function () {
  console.log(document.querySelector(".fold-table"))
  console.log(document.querySelectorAll(".fold-table tbody tr.view"));
  document.querySelectorAll(".fold-table tbody tr.view").forEach(function(row) {
      row.addEventListener("click", function() {
          if (this.classList.contains("open")) {
              this.classList.remove("open");
              let nextRow = this.nextElementSibling;
              if (nextRow && nextRow.classList.contains("fold")) {
                  nextRow.classList.remove("open");
              }
          } else {
              document.querySelectorAll(".fold-table tbody tr.view").forEach(function(viewRow) {
                  viewRow.classList.remove("open");
                  let nextFold = viewRow.nextElementSibling;
                  if (nextFold && nextFold.classList.contains("fold")) {
                      nextFold.classList.remove("open");
                  }
              });
            
              this.classList.add("open");
              let nextRow = this.nextElementSibling;
              if (nextRow && nextRow.classList.contains("fold")) {
                  nextRow.classList.add("open");
              }
          }
      });
  });
});
