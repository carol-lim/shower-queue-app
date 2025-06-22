# Shower Queue App #

## To start app ##

Rename frontend/.env.example to frontend/.env
Replace your supabase url and anon key (Do not replace in .example file to prevent leaking secrets to Github)

Change the ports in .env files if needed

### For Bash ###
```bash
cd frontend
npm run dev
```

to build
```bash
cd frontend
npm run build
cd dist
npx -s serve .
```