<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="locked.js"></script>
        <script type="text/javascript">
        function doDecrypt() {
            var data = '__DATA__';
            var html = sjcl.decrypt(document.getElementById('password').value, data);
            while (document.body.firstChild)
                document.body.removeChild(document.body.firstChild);
            document.write(html);
        }
        </script>
    </head>
    <body>
        <input type="password" name="password" id="password">
        <button type="button" onclick="doDecrypt();">Unlock</button>
    </body>
</html>