var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Field, InputType } from "type-graphql";
let NewFileInput = class NewFileInput {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], NewFileInput.prototype, "userId", void 0);
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", String)
], NewFileInput.prototype, "channelId", void 0);
__decorate([
    Field(type => [String], { nullable: true }),
    __metadata("design:type", Array)
], NewFileInput.prototype, "channelIds", void 0);
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", String)
], NewFileInput.prototype, "filters", void 0);
__decorate([
    Field(type => [String], { nullable: true }),
    __metadata("design:type", Array)
], NewFileInput.prototype, "filesId", void 0);
NewFileInput = __decorate([
    InputType()
], NewFileInput);
export default NewFileInput;
