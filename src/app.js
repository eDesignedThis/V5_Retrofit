console.log("app.js is running");

// Populate Navigation
const publicNav = document.getElementById("header__nav__public");
const privateNav = document.getElementById("header__nav__private");
const publicFtrNav = document.getElementById("footer__nav__public");
const privateFtrNav = document.getElementById("footer__nav__private");
if (publicNav) {
  function getPublicNav() {
    $.getJSON("/src/data/navigation.json", function (data) {
      for (i = 0; i < data.public.length; i++) {
        // console.log(data.public[i].name);
        publicNav.innerHTML += `<li class="nav-item"><a class="nav-link" href="/${data.public[i].url}">${data.public[i].name} </a></li>`;
      }
    });
  }

  getPublicNav();
}
if (privateNav) {
  function getPrivateNav() {
    $.getJSON("/src/data/navigation.json", function (data) {
      for (i = 0; i < data.private.length; i++) {
        // console.log(data.public[i].name);
        privateNav.innerHTML += `<li class="nav-item"><a class="nav-link" href="/${data.private[i].url}">${data.private[i].name} </a></li>`;
      }
    });
  }

  getPrivateNav();
}

if (publicFtrNav) {
  function getPrivateFtrNav() {
    $.getJSON("/src/data/navigation.json", function (data) {
      for (i = 0; i < data.ftrPublic.length; i++) {
        publicFtrNav.innerHTML += `<li class="nav-item"><a class="nav-link" href="${data.ftrPublic[i].url}">${data.ftrPublic[i].name} </a></li>`;
      }
    });
  }

  getPrivateFtrNav();
}
if (privateFtrNav) {
  function getPrivateFtrNav() {
    $.getJSON("/src/data/navigation.json", function (data) {
      for (i = 0; i < data.ftrPrivate.length; i++) {
        privateFtrNav.innerHTML += `<li class="nav-item"><a class="nav-link" href="${data.ftrPrivate[i].url}">${data.ftrPrivate[i].name} </a></li>`;
      }
    });
  }

  getPrivateFtrNav();
}

// Handle Date Pickers globally
$(".date").datepicker();

// Performance Tracking

const addProductButton = document.getElementById("add-product");
const addProduct = document.getElementById("add_product_wrapper");

if (addProduct && addProductButton) {
  addProduct.style.display = "none";
  addProductButton.addEventListener("click", function () {
    this.style.display = "none";
    addProduct.style.display = "block";
    $("html, body").animate({ scrollTop: 500 }, 300);
  });
}

// FAQ Page
const faqContainer = document.getElementById("faq-container");

if (faqContainer) {
  $.getJSON("/src/data/faq.json", function (data) {
    for (i = 0; i < data.faqs.length; i++) {
      faqContainer.innerHTML += `
      <li class='list-group-item bg-transparent py-4'>
        <h5 class='font-weight-bold'>${data.faqs[i].ques}</h5>
        <p class='mb-0'>${data.faqs[i].ans}</p>
      </li>
      `;
    }
  });
}

// Rule Page
const ruleContainer = document.getElementById("rules-container");
const genInfoContainer = document.getElementById("genInfo-container");

if (ruleContainer) {
  $.getJSON("/src/data/rules.json", function (data) {
    for (i = 0; i < data.rules.length; i++) {
      // console.log(data.rules[i].rule);
      ruleContainer.innerHTML += `
      <li class='list-group-item bg-transparent py-4'>
      <h5 class='font-weight-bold'>${data.rules[i].rule}</h5>
        <p class='mb-0'>${data.rules[i].ruleContent}</p>
      </li>
      `;
    }
  });
}

if (genInfoContainer) {
  $.getJSON("/src/data/rules.json", function (data) {
    for (i = 0; i < data.genInfo.length; i++) {
      genInfoContainer.innerHTML += `
      <li class='list-group-item bg-transparent py-4'>
        <p class='mb-0'>${data.genInfo[i]}</p>
      </li>
      `;
    }
  });
}

// Terms Page
const termsContainer = document.getElementById("terms-container");

if (termsContainer) {
  $.getJSON("/src/data/terms.json", function (data) {
    for (i = 0; i < data.terms.length; i++) {
      termsContainer.innerHTML += `
      <li class='list-group-item bg-transparent py-4'>
      <h5 class='font-weight-bold'>${data.terms[i].heading}</h5>
        <p class='mb-0'>${data.terms[i].content}</p>
      </li>
      `;
    }
  });
}

// Privacy Page

const privacyContainer = document.getElementById("privacy-container");

if (privacyContainer) {
  $.getJSON("/src/data/privacy.json", function (data) {
    for (i = 0; i < data.privacy.length; i++) {
      privacyContainer.innerHTML += `
      <li class='list-group-item bg-transparent py-4'>
      <span class='font-weight-bold'>${data.privacy[i].heading}</span>
        <span>${data.privacy[i].content}</span>
      </li>
      `;
    }
  });
}

// Home Page

// My Awards Table
const awardsTable = document.getElementById("awards-container");

if (awardsTable) {
  $.getJSON("/src/data/my_awards.json", function (data) {
    for (i = 0; i < data.myAwards.length - 11; i++) {
      awardsTable.innerHTML += `
      <tr>
        <td>${data.myAwards[i].date}</td>
        <td>${data.myAwards[i].description}</td>
        <td class='text-right'>${data.myAwards[i].award}</td>
      </tr>
      `;
    }
  });
}

// My Account Page (history.html)
// const promosContainer = document.getElementById("promos-container");

// if (promosContainer) {
//   // let outputHTML = "";
//   // $.getJSON("/src/data/promotions.json", function (data) {
//   //   for (i = 0; i < data.promotions.length; i++) {
//   //     outputHTML =
//   //       '<li class="list-group-item border-0 px-0"><div class="card shadow"><div class="card-body"><div class="row mb-4 mb-sm-0 mb-xl-4"><div class="col-12 mb-4 mb-xl-0 col-xl-3"><div class="row"><div class="col-2 bg-light text-center d-flex flex-column justify-content-center"><div class="fas fa-book"></div></div><div class="col-10"><small class="d-block font-weight-bold text-uppercase text-muted">Promotion Name</small><a class="promo-title mb-0" href="../performance-tracking/claim-forms/claims-forms_1.html">' +
//   //       data.promotions[i].promoName;
//   //     promosContainer.innerHTML += outputHTML;
//   //   }
//   // });
// }

// Leaderboard Page
const leaderboard = document.getElementById("leaderboard");

if (leaderboard) {
  $.getJSON("/src/data/leaderboard.json", function (data) {
    // console.log(data.leaderboard);
    let output = "";

    let pointsArr = [];
    for (i = 0; i < data.leaderboard.length; i++) {
      let points = data.leaderboard[i].points;
      pointsArr.push(points);

      pointsArr.sort(function (a, b) {
        return b - a;
      });

      console.log(pointsArr);

      output += `
      <tr>
      <th scope="row">${[i + 1]}</th>
      <td>${data.leaderboard[i].first_name}</td>
      <td>${data.leaderboard[i].last_name}</td>
      <td>${data.leaderboard[i].region}</td>
      <td class='text-right'>${data.leaderboard[i].points}</td>
    </tr>`;

      leaderboard.innerHTML = output;
    }
  });
}

// History Page
$(function () {
  $("#promotions-grid").dxDataGrid({
    dataSource: "/src/data/v5-promotions.json",
    columns: [
      "PromotionName",
      "Approved",
      "Pending",
      "NeedVerfication",
      "Awarded",
      "",
    ],
    showBorders: true,
    rowAlternationEnabled: true,
    paging: {
      pageSize: 5,
      pageIndex: 1, // Shows the second page
    },
  });
});

$(function () {
  $("#transactions-grid").dxDataGrid({
    dataSource: "/src/data/v5-transactions.json",
    columns: ["type", "description", "date", "amount"],
    showBorders: true,
    rowAlternationEnabled: true,
    paging: {
      pageSize: 5,
      pageIndex: 1, // Shows the second page
    },
  });
});

// My History - V2 Page
const promotionsGrid = document.getElementById("promotions-grid");

if (promotionsGrid) {
  console.log("History page running");

  $.getJSON("/src/data/v5-promotions.json", function (data) {
    for (i = 0; i < data.Promos.length; i++) {
      // Generate Card
      let div = document.createElement("div");
      div.setAttribute("class", "list-group-item border-0 pb-2 mb-2");
      div.innerHTML = document.getElementById("promo-item").innerHTML;
      promotionsGrid.appendChild(div);

      // console.log(data.Promos[i].Promotions.Name);
    }
    let promoName = document.querySelectorAll("p.promotion_name");
    let totalClaims = document.querySelectorAll("p.total_claims");
    let claimsApproved = document.querySelectorAll("span.claims_approved");
    let claimsPending = document.querySelectorAll("span.claims_pending");
    let claimsNeedVerification = document.querySelectorAll(
      "span.claims_need_verification"
    );
    let claimsAwarded = document.querySelectorAll("span.claims_awarded");
    let claimsApprovedArray = [];
    let claimsPendingArray = [];
    let claimsNeedVerificationArray = [];
    let claimsAwardedArray = [];

    // Populate Name
    for (i = 0; i < promoName.length; i++) {
      promoName[i].innerHTML = data.Promos[i].Promotions.Name;
    }

    // Populate Total Claims
    for (i = 0; i < totalClaims.length; i++) {
      totalClaims[i].innerHTML = data.Promos[i].Promotions.Claims.length;
      // Sort Claims
    }
  });
}

// Shopping Page

//Truncate long item titles to 2 lines max.

// Page: Item Detail
