// IDA unicode string view -> code.interface.msg.etc.logout_penalty_exit
// xrefs
// largish function with another reference to logout_penaly_logout
// first jz in this function -> jmp
var firstJz = scan('0F 84 ?? ?? ?? ?? 88 5D F2 88 5D F3');

patch(firstJz, [0x90, 0xE9]);
