# README

## Project Name

nestjs-aliyun-captcha

## Project Description

This is an Aliyun Captcha module provided for NestJS.

## Installation

Install using npm:

```bash
npm install nestjs-aliyun-captcha
```

## Usage

First, you need to import `AliyunCaptchaModule` in your module:

```typescript
import { AliyunCaptchaModule } from 'nestjs-aliyun-captcha';

@Module({
  imports: [
    AliyunCaptchaModule.register({
      accessKeyId: 'your-access-key-id',
      accessKeySecret: 'your-access-key-secret',
      endpoint: 'your-endpoint', // Optional, default is 'captcha.cn-shanghai.aliyuncs.com'
      connectTimeout: 10000, // Optional
      readTimeout: 10000, // Optional
    }),
  ],
})
export class AppModule {}
```

Then, you can use `AliyunCaptchaGuard` in your route guard:

```typescript
import { Controller, UseGuards } from '@nestjs/common';
import { AliyunCaptchaGuard } from 'nestjs-aliyun-captcha';

@Controller('your-route')
@UseGuards(AliyunCaptchaGuard)
export class YourController {
  // your controller methods
}
```

`AliyunCaptchaGuard` will check the `captchaVerifyParam` field in the request's query or body, and use it to verify the captcha.

## Development

The project is developed using TypeScript, you can use the following command to build:

```bash
npm run build
```

The project uses ESLint for code checking, you can use the following command to check:

```bash
npm run lint
```

If you want to automatically fix some fixable issues, you can use the following command:

```bash
npm run lint:fix
```

The project uses Prettier for code formatting, you can use the following command to format:

```bash
npm run format
```

If you want to check whether the code conforms to the format of Prettier, you can use the following command:

```bash
npm run format:check
```

## License

This project uses the MIT license.
