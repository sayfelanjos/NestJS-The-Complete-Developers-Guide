"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const messages_module_1 = require("./messages/messages.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(messages_module_1.MessagesModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(3000);
}
bootstrap().then(r => r);
//# sourceMappingURL=main.js.map