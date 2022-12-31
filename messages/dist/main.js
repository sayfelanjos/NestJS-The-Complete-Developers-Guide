"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const messages_module_1 = require("./messages/messages.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(messages_module_1.MessagesModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map