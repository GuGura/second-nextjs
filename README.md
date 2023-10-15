# Package

``` 
npm i -D daisyui@latest
npm i prisma @prisma/client next-auth @auth/prisma-adapter
npm i prettier eslint-config-prettier prettier-plugin-tailwindcss eslint-plugin-tailwindcss
npm i zod
```

### Prisma 초기설정

```
 npx prisma init
```

### .env || gitignore || Prisma > schema.prisma > 초기설정

### 스키마 생성 ( dev 서버 종료 -> 명령어 실행)

```
 npx prisma db pull
 그 이후에 
 npx prisma generate
```

### prisma 생성

```
 npx prisma generate
```
