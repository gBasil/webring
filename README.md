# App Icon Webring

Note that the initial form of this webpage was written to work with a specific webring software, before the decision to write our own, so some of the code jank is due to that.

## Adding Yourself

1. Add yourself to `src/lib/members.ts`.
2. Add your icon to `public/avatars/`.
3. Optionally, head to `pages/index.astro` and make yourself a custom app.
4. Embed the webring into your website. Here are two examples (make sure to replace `[id]` with your ID!), but you can do this however you wish:

```html
<!-- Unstylized -->
<div>
	<a href="/prev?id=[id]"><=</a>
	<a href="https://ring.basil.cafe">App Icon Ring</a>
	<a href="/next?id=[id]">=></a>
</div>
```

```html
<!-- Stylized -->
<div class="app-icon-ring">
	<a href="/prev?id=[id]"><img src="https://ring.basil.cafe/images/left.svg" /></a>
	<a href="https://ring.basil.cafe"><img src="https://ring.basil.cafe/avatars/[id].svg" /></a>
	<a href="/next?id=[id]"><img src="https://ring.basil.cafe/images/right.svg" /></a>
</div>
<style>
	.app-icon-ring {
		display: flex;
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
