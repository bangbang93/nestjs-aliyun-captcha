# README

## 项目名称

nestjs-aliyun-captcha

## 项目描述

这是一个为NestJS提供的阿里云验证码模块。

## 安装

使用npm进行安装：

```bash
npm install nestjs-aliyun-captcha
```

## 使用方法

首先，你需要在你的模块中导入`AliyunCaptchaModule`：

```typescript
import { AliyunCaptchaModule } from 'nestjs-aliyun-captcha';

@Module({
  imports: [
    AliyunCaptchaModule.register({
      accessKeyId: 'your-access-key-id',
      accessKeySecret: 'your-access-key-secret',
      endpoint: 'your-endpoint', // 可选，默认为 'captcha.cn-shanghai.aliyuncs.com'
      connectTimeout: 10000, // 可选
      readTimeout: 10000, // 可选
    }),
  ],
})
export class AppModule {}
```

然后，你可以在你的路由守卫中使用`AliyunCaptchaGuard`：

```typescript
import { Controller, UseGuards } from '@nestjs/common';
import { AliyunCaptchaGuard } from 'nestjs-aliyun-captcha';

@Controller('your-route')
@UseGuards(AliyunCaptchaGuard)
export class YourController {
  // your controller methods
}
```

`AliyunCaptchaGuard`会检查请求的query或body中的`captchaVerifyParam`字段，并使用它来验证验证码。

## 开发

项目使用TypeScript进行开发，你可以使用以下命令进行构建：

```bash
npm run build
```

项目使用ESLint进行代码检查，你可以使用以下命令进行检查：

```bash
npm run lint
```

如果你想自动修复一些可修复的问题，你可以使用以下命令：

```bash
npm run lint:fix
```

项目使用Prettier进行代码格式化，你可以使用以下命令进行格式化：

```bash
npm run format
```

如果你想检查代码是否符合Prettier的格式，你可以使用以下命令：

```bash
npm run format:check
```

## 许可证

本项目使用MIT许可证。
