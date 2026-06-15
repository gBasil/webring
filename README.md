# App Icon Webring

## Adding Yourself

1. Add yourself to `src/lib/members.ts`.
2. Add your icon to `public/avatars/`.
3. Optionally, head to `pages/index.astro` and make yourself a custom app.
4. Embed the webring into your website. Here are a few examples (make sure to replace `[id]` with your ID!), but you can do this however you wish:

<details>
<summary>Unstylized</summary>

```html
<div>
	<a href="https://ring.basil.cafe/prev?id=[id]"><=</a>
	<a href="https://ring.basil.cafe">App Icon Ring</a>
	<a href="https://ring.basil.cafe/next?id=[id]">=></a>
</div>
```

</details>

<details>
<summary>Stylized</summary>

```html
<div class="app-icon-ring">
	<a href="https://ring.basil.cafe/prev?id=[id]">
		<img src="https://ring.basil.cafe/images/left.svg" width="52" height="52" />
	</a>
	<a href="https://ring.basil.cafe">
		<img src="https://ring.basil.cafe/avatars/[id].svg" width="52" height="52" />
	</a>
	<a href="https://ring.basil.cafe/next?id=[id]">
		<img src="https://ring.basil.cafe/images/right.svg" width="52" height="52" />
	</a>
</div>
<style>
	.app-icon-ring {
		display: flex;
		width: min-content;
		gap: 16px;
		padding: 10px;
		border-radius: 22px;
		background-color: #ffffff72;
	}

	.app-icon-ring img {
		display: block;
		width: 52px;
		height: 52px;
		border-radius: 14px;
	}

	.app-icon-ring a:active img {
		filter: brightness(0.4);
	}
</style>
```

</details>

<details>
<summary>88x31</summary>

```html
<div class="app-icon-ring">
	<a href="https://ring.basil.cafe">
		<img width="88" height="31" src="https://ring.basil.cafe/images/88x31-nav/button.webp" />
	</a>
	<a href="https://ring.basil.cafe/prev?id=[id]">
		<img width="16" height="31" src="https://ring.basil.cafe/images/88x31-nav/left-hover.webp" />
		<img width="16" height="31" src="https://ring.basil.cafe/images/88x31-nav/left-active.webp" />
	</a>
	<a href="https://ring.basil.cafe/next?id=[id]">
		<img width="16" height="31" src="https://ring.basil.cafe/images/88x31-nav/right-hover.webp" />
		<img width="16" height="31" src="https://ring.basil.cafe/images/88x31-nav/right-active.webp" />
	</a>
</div>
<style>
	/* If you don't already set this for 88x31s */
	.app-icon-ring img {
		image-rendering: pixelated;
	}

	.app-icon-ring {
		position: relative;
	}
	.app-icon-ring img {
		display: block;
	}
	.app-icon-ring > :not(:first-child) img {
		position: absolute;
		top: 0;
		opacity: 0;
	}
	.app-icon-ring > :nth-child(3) img {
		left: 72px;
	}
	.app-icon-ring > :not(:first-child):hover img:first-child {
		opacity: 1;
	}
	.app-icon-ring > :not(:first-child):active img:last-child {
		opacity: 1;
	}
</style>
```

</details>
