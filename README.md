# Static Marketing Site Deployment

This repo is set up for a plain static site hosted from GitHub and deployed by Netlify with no build step.

## Expected site structure

Netlify will publish the repository root as-is. A typical setup is:

```text
/
  index.html
  styles.css
  script.js
  assets/
```

## GitHub -> Netlify setup

1. Push this repo to GitHub.
2. In Netlify, choose **Add new site** -> **Import an existing project**.
3. Connect the GitHub repository.
4. Use these settings:
   - Branch to deploy: your production branch, usually `main`
   - Build command: leave blank
   - Publish directory: `.`
5. Deploy the site.

Because this is a no-build static site, Netlify will serve the checked-in files directly from the repo root.

## Deploy workflow

- Edit HTML, CSS, JS, and assets in the repo.
- Commit and push to GitHub.
- Netlify auto-deploys each push to the connected branch.

## Custom domain

In Netlify, open **Site configuration** -> **Domain management** -> **Add a domain**.

- For an apex domain such as `example.com`, update DNS using the records Netlify provides.
- For a subdomain such as `www.example.com`, point DNS to Netlify as instructed in the dashboard.
- Enable HTTPS once DNS is verified. Netlify provisions the certificate automatically in most cases.

## Replace before sending to client

Review and replace these project-specific values:

- Any placeholder domain names such as `example.com`
- The production branch name if it is not `main`
- Contact, legal, analytics, or form endpoints added in the site files
- The WhatsApp number and business name in `script.js`
- Any temporary preview or staging URLs shared during development

## Files in this setup

- `netlify.toml`: tells Netlify to publish the repo root with no build step
- `.gitignore`: keeps local Netlify and OS clutter out of git
- `README.md`: handoff notes for deployment and client-ready cleanup
- `script.js`: central place for the WhatsApp destination and business name used by the form
