document.addEventListener('DOMContentLoaded', () => {
  function templateMetin2ServerList(data) {
    let getCurrentDate = new Date()

    let template = `
    <div class="AfruxWidgets-Widget Afrux-TopPostersWidget">
      <div class="AfruxWidgets-Widget-title">
        <span class="AfruxWidgets-Widget-title-icon">
          <i aria-hidden="true" class="icon fas fa-server"></i>
        </span>
        <span class="AfruxWidgets-Widget-title-label">
          ${data.title}
        </span>
      </div>
      <div class="AfruxWidgets-Widget-content" style="background: #14191f; padding: 12px; border-radius: 14px;">
        <div class="Afrux-TopPostersWidget-users">
    `

    data.items.forEach((item) => {
      let status = new Date(item.date) < getCurrentDate ? '#58a400' : '#d83e3e'

      template += `
          <div class="Afrux-TopPostersWidget-users-item">
            <div class="Afrux-TopPostersWidget-users-item-avatar">
              <a href="${item.url}/?utm=www.metin2.org.tr" title="${item.name} - ${item.level} - ${item.difficulty} - ${item.date}" target="_blank">
                <img
                  class="Avatar"
                  loading="lazy"
                  src="${item.image}"
                  width="32"
                  height="32"
                  alt="${item.name}"
                />
              </a>
            </div>
            <div class="Afrux-TopPostersWidget-users-item-content">
              <div
                class="Afrux-TopPostersWidget-users-item-name"
                style="font-weight: 500"
              >
                <a href="${item.url}/?utm=www.metin2.org.tr" title="${item.name} - ${item.level} - ${item.difficulty} - ${item.date}" target="_blank" style="color: var(--text-color); text-decoration: none; display: flex; justify-content: space-between; align-items: center;">
                  ${item.name}

                  <span style="background: ${status}; width: 10px; height: 10px; border-radius: 100%;"></span>
                </a>
              </div>
              <div
                class="Afrux-TopPostersWidget-users-item-value"
                style="font-size: 12px"
              >
                ${item.level} - ${item.difficulty}
              </div>
            </div>
          </div>
      `
    })

    template += `
        </div>
      </div>
    </div>
    `

    return template
  }

  function getMetin2ServerList() {
    const API =
      'https://raw.githubusercontent.com/tengridev/metin2/main/servers.json'

    let xhr = new XMLHttpRequest()
    xhr.open('GET', API)
    xhr.responseType = 'json'
    xhr.send()

    xhr.onload = function () {
      let lastWeek = xhr.response.lastWeek
      let currentWeek = xhr.response.currentWeek
      let nextWeek = xhr.response.nextWeek

      let output = ''

      if (lastWeek.length > 0) {
        output += templateMetin2ServerList({
          title: 'Geçen Haftanın Sunucuları',
          items: lastWeek
        })
      }

      if (currentWeek.length > 0) {
        output += templateMetin2ServerList({
          title: 'Bu Haftanın Sunucuları',
          items: currentWeek
        })
      }

      if (nextWeek.length > 0) {
        output += templateMetin2ServerList({
          title: 'Gelecek Haftanın Sunucuları',
          items: nextWeek
        })
      }

      document.getElementById('metin2-server-list').innerHTML = output
    }
  }

  if (window.location.pathname == '/') {
    getMetin2ServerList()

    setInterval(function () {
      getMetin2ServerList()
    }, 1000 * 60)
  }
})
