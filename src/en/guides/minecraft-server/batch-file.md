This is the most basic form of a batch file:

```bat:line-numbers
@echo off
java -Xms4G -Xmx4G -jar server.jar nogui
pause
```

`java`
calls java
`Xms[...]`
Set the **minimum allocated** RAM for the Server. This means that this server will always be reserved for the server and cannot be used by other programs. If not set, the unused RAM from the maximum RAM variable will be used by other programs until the server needs it.
`-Xmx[...]`
Sets the **maximum allowed** RAM for the Server. The server will never use more than this, so set this according to your needs like player count, mod count etc.
`-jar`
Tells Java to run the program from inside the .jar file
`server.jar`
This is the ==**exact** file name== of your server file. Double check that this matches!  
`nogui`
Mojang also has their own little chat window that appears when only running the server from the server file without a batch file. But since we already have the chat inside our terminal we don't need this little custom window. We disable it with the flag "nogui"
