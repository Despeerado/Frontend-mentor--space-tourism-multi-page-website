const tabList = document.querySelector('[role="tablist"]')
const tabs = tabList.querySelectorAll('[role="tab"]')


tabList.addEventListener('keydown', changeTabFocus)

tabs.forEach((tab) => {
	tab.addEventListener('click', changeTabPannel)
})

function changeTabPannel(e) {
	const targetTab = e.target;
	const targetPanel = targetTab.getAttribute('aria-controls')
	const tabContainer = targetTab.parentNode
	const maincontainer = tabContainer.parentNode

	maincontainer
		.querySelectorAll('[role="tabpanel"]')
		.forEach((panel) => panel.setAttribute("hidden", true));

	maincontainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden')
	console.log(targetPanel)
}

let tabFocus = 0

function changeTabFocus(e) {
	const keydownLeft = 37
	const keydownRight = 39
	// change the tabindex of the current tab to -1
	if (e.keycode === keydownLeft || e.keycode === keydownRight) {
		tabs[tabFocus].setAttribute('tabindex', -1)

	}
	if (e.keycode === keydownRight) {
		tabFocus++
		if (tabFocus >= tabs.length) {
			tabFocus = 0
		}
	}

	if (e.keycode === keydownLeft) {
		tabFocus--
		if (tabFocus < 0) {
			tabFocus = tabs.length - 1
		}
	}

	tabs[tabFocus].setAttribute('tabindex', 0)
	tabs[tabFocus].focus()
}