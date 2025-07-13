// npx vitest run src/__tests__/index.test.ts

import { generatePackageJson } from "../index.js"

describe("generatePackageJson", () => {
	it("should be a test", () => {
		const generatedPackageJson = generatePackageJson({
			packageJson: {
				name: "roo-cline",
				displayName: "%extension.displayName%",
				description: "%extension.description%",
				publisher: "RooVeterinaryInc",
				version: "3.17.2",
				icon: "assets/icons/icon.png",
				contributes: {
					viewsContainers: {
						activitybar: [
							{
								id: "roo-cline-ActivityBar",
								title: "%views.activitybar.title%",
								icon: "assets/icons/icon.svg",
							},
						],
					},
					views: {
						"roo-cline-ActivityBar": [
							{
								type: "webview",
								id: "roo-cline.SidebarProvider",
								name: "",
							},
						],
					},
					commands: [
						{
							command: "roo-cline.plusButtonClicked",
							title: "%command.newTask.title%",
							icon: "$(add)",
						},
						{
							command: "roo-cline.openInNewTab",
							title: "%command.openInNewTab.title%",
							category: "%configuration.title%",
						},
					],
					menus: {
						"editor/context": [
							{
								submenu: "roo-cline.contextMenu",
								group: "navigation",
							},
						],
						"roo-cline.contextMenu": [
							{
								command: "roo-cline.addToContext",
								group: "1_actions@1",
							},
						],
						"editor/title": [
							{
								command: "roo-cline.plusButtonClicked",
								group: "navigation@1",
								when: "activeWebviewPanelId == roo-cline.TabPanelProvider",
							},
							{
								command: "roo-cline.settingsButtonClicked",
								group: "navigation@6",
								when: "activeWebviewPanelId == roo-cline.TabPanelProvider",
							},
							{
								command: "roo-cline.accountButtonClicked",
								group: "navigation@6",
								when: "activeWebviewPanelId == roo-cline.TabPanelProvider",
							},
						],
					},
					submenus: [
						{
							id: "roo-cline.contextMenu",
							label: "%views.contextMenu.label%",
						},
						{
							id: "roo-cline.terminalMenu",
							label: "%views.terminalMenu.label%",
						},
					],
					configuration: {
						title: "%configuration.title%",
						properties: {
							"roo-cline.allowedCommands": {
								type: "array",
								items: {
									type: "string",
								},
								default: ["npm test", "npm install", "tsc", "git log", "git diff", "git show"],
								description: "%commands.allowedCommands.description%",
							},
							"roo-cline.customStoragePath": {
								type: "string",
								default: "",
								description: "%settings.customStoragePath.description%",
							},
						},
					},
				},
				scripts: {
					lint: "eslint **/*.ts",
				},
			},
			overrideJson: {
				name: "dorjear-code-nightly",
				displayName: "Dorjear Code Nightly",
				publisher: "RooVeterinaryInc",
				version: "0.0.1",
				icon: "assets/icons/icon-nightly.png",
				scripts: {},
			},
			substitution: ["roo-cline", "dorjear-code-nightly"],
		})

		expect(generatedPackageJson).toStrictEqual({
			name: "dorjear-code-nightly",
			displayName: "Dorjear Code Nightly",
			description: "%extension.description%",
			publisher: "RooVeterinaryInc",
			version: "0.0.1",
			icon: "assets/icons/icon-nightly.png",
			contributes: {
				viewsContainers: {
					activitybar: [
						{
							id: "dorjear-code-nightly-ActivityBar",
							title: "%views.activitybar.title%",
							icon: "assets/icons/icon.svg",
						},
					],
				},
				views: {
					"dorjear-code-nightly-ActivityBar": [
						{
							type: "webview",
							id: "dorjear-code-nightly.SidebarProvider",
							name: "",
						},
					],
				},
				commands: [
					{
						command: "dorjear-code-nightly.plusButtonClicked",
						title: "%command.newTask.title%",
						icon: "$(add)",
					},
					{
						command: "dorjear-code-nightly.openInNewTab",
						title: "%command.openInNewTab.title%",
						category: "%configuration.title%",
					},
				],
				menus: {
					"editor/context": [
						{
							submenu: "dorjear-code-nightly.contextMenu",
							group: "navigation",
						},
					],
					"dorjear-code-nightly.contextMenu": [
						{
							command: "dorjear-code-nightly.addToContext",
							group: "1_actions@1",
						},
					],
					"editor/title": [
						{
							command: "dorjear-code-nightly.plusButtonClicked",
							group: "navigation@1",
							when: "activeWebviewPanelId == dorjear-code-nightly.TabPanelProvider",
						},
						{
							command: "dorjear-code-nightly.settingsButtonClicked",
							group: "navigation@6",
							when: "activeWebviewPanelId == dorjear-code-nightly.TabPanelProvider",
						},
						{
							command: "dorjear-code-nightly.accountButtonClicked",
							group: "navigation@6",
							when: "activeWebviewPanelId == dorjear-code-nightly.TabPanelProvider",
						},
					],
				},
				submenus: [
					{
						id: "dorjear-code-nightly.contextMenu",
						label: "%views.contextMenu.label%",
					},
					{
						id: "dorjear-code-nightly.terminalMenu",
						label: "%views.terminalMenu.label%",
					},
				],
				configuration: {
					title: "%configuration.title%",
					properties: {
						"dorjear-code-nightly.allowedCommands": {
							type: "array",
							items: {
								type: "string",
							},
							default: ["npm test", "npm install", "tsc", "git log", "git diff", "git show"],
							description: "%commands.allowedCommands.description%",
						},
						"dorjear-code-nightly.customStoragePath": {
							type: "string",
							default: "",
							description: "%settings.customStoragePath.description%",
						},
					},
				},
			},
			scripts: {},
		})
	})
})
