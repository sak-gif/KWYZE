# KWYZE

A small Flask project.

## Deploying to Render

These quick steps will get your Flask app running on Render.com.

1. Ensure you have the following files at the repository root:
   - `requirements.txt` (contains `Flask` and `gunicorn`)
   - `Procfile` (or use a start command in the Render dashboard)
   - optional: `render.yaml` (service manifest to automate creation)

2. Example files (already included):
   - `requirements.txt`:
     - Flask
     - gunicorn
   - `Procfile`:
     - web: gunicorn app:app

3. Commit and push your branch to GitHub:

   git add requirements.txt Procfile render.yaml README.md
   git commit -m "Add Render deployment files"
   git push origin main

4. On Render.com:
   - Create a new Web Service.
   - Connect your GitHub repo and choose the `main` branch.
   - Build Command: pip install -r requirements.txt
   - Start Command: gunicorn app:app
   - Set Environment (choose region, instance type). For secrets like `SECRET_KEY`, add them under Environment > Environment Variables in the Render dashboard.

5. Health check and logs:
   - Render will show deploy logs. If the service fails to start, check logs for missing packages or import errors.
   - Add a simple health route in `app.py` (e.g., `/health`) to help Render confirm the app is running.

Notes and tips:
  - If your Flask app variable is not named `app` or your module isn't `app.py`, adjust the gunicorn command accordingly: `gunicorn module:variable`.
  - If static files are heavy or you want a CDN, consider using a storage/CDN for `static/` assets.
  - Use Render environment variables to keep secrets out of source control.
# KWYZE
# KWYZE
