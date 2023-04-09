document.addEventListener('DOMContentLoaded', () => {
  const SERVER_LIST_PAGES = ['/', '/t/', '/following']
  const METIN2_API =
    'https://raw.githubusercontent.com/tengridev/metin2/main/servers.json'

  const generateServerListTemplate = (data) => {
    const getCurrentDate = new Date()
    const serverListItems = data.items
      .map(
        (item) => `
        <div class="Afrux-TopPostersWidget-users-item">
          <div class="Afrux-TopPostersWidget-users-item-avatar">
            <a
              href="${
                item.url
              }/?utm_source=metin2.org.tr&utm_medium=toplist&utm_campaign=toplist"
              title="${item.name} - ${item.level} - ${item.difficulty}"
              target="_blank"
            >
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
            <div class="Afrux-TopPostersWidget-users-item-name" style="font-weight: 500">
              <a
                href="${
                  item.url
                }/?utm_source=metin2.org.tr&utm_medium=toplist&utm_campaign=toplist"
                title="${item.name} - ${item.level} - ${item.difficulty}"
                target="_blank"
                style="
                  color: var(--text-color);
                  text-decoration: none;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                ${item.name}

                <span style="background: ${
                  new Date(item.date) < getCurrentDate ? '#58a400' : '#d83e3e'
                }; width: 10px; height: 10px; border-radius: 100%;"></span>
              </a>
            </div>
            <div class="Afrux-TopPostersWidget-users-item-value" style="font-size: 12px">
              ${item.level} - ${item.difficulty}
            </div>
          </div>
        </div>
        `
      )
      .join('')

    return `
    <div class="AfruxWidgets-Widget Afrux-TopPostersWidget">
      <div class="AfruxWidgets-Widget-title">
        <span class="AfruxWidgets-Widget-title-icon">
          <i aria-hidden="true" class="icon fas fa-server"></i>
        </span>
        <span class="AfruxWidgets-Widget-title-label">
          ${data.title}
        </span>
      </div>
      <div class="AfruxWidgets-Widget-content" style="background: #14191f; padding: 12px; border-radius: 14px">
        <div class="Afrux-TopPostersWidget-users">
          ${serverListItems}
        </div>
      </div>
    </div>
    `
  }

  const getMetin2ServerList = async () => {
    try {
      const response = await fetch(METIN2_API)
      const data = await response.json()

      const toplist = data.toplist || []
      const lastWeek = data.lastWeek || []
      const currentWeek = data.currentWeek || []
      const nextWeek = data.nextWeek || []

      let output = ''
      if (lastWeek.length > 0) {
        output += generateServerListTemplate({
          title: 'Geçen Haftanın Sunucuları',
          items: lastWeek
        })
      }
      if (currentWeek.length > 0) {
        output += generateServerListTemplate({
          title: 'Bu Haftanın Sunucuları',
          items: currentWeek
        })
      }
      if (nextWeek.length > 0) {
        output += generateServerListTemplate({
          title: 'Gelecek Haftanın Sunucuları',
          items: nextWeek
        })
      }
      if (document.getElementById('metin2-server-list')) {
        document.getElementById('metin2-server-list').innerHTML = output
      }

      if (
        toplist.length > 0 &&
        document.getElementById('metin2-server-toplist')
      ) {
        document.getElementById('metin2-server-toplist').innerHTML =
          generateServerListTemplate({
            title: 'En Popüler Sunucular',
            items: toplist
          })
      }
    } catch (error) {
      console.error(error)
    }
  }

  const runMetin2ServerList = () => {
    if (
      SERVER_LIST_PAGES.includes(window.location.pathname) ||
      SERVER_LIST_PAGES.includes(window.location.pathname.substring(0, 3))
    ) {
      getMetin2ServerList()
    }
  }

  runMetin2ServerList()
  let oldPathname = window.location.pathname
  setInterval(function () {
    if (window.location.pathname !== oldPathname) {
      oldPathname = window.location.pathname
      runMetin2ServerList()
    }
  }, 1000 * 3)
})
