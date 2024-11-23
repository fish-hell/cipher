        function utf8ToBase64(str) {
            const encoder = new TextEncoder();
            const uint8Array = encoder.encode(str);
            return btoa(String.fromCharCode(...uint8Array));
        }

        function base64ToUtf8(base64) {
            const binaryStr = atob(base64);
            const binaryArray = new Uint8Array([...binaryStr].map(char => char.charCodeAt(0)));
            const decoder = new TextDecoder();
            return decoder.decode(binaryArray);
        }


        document.getElementById('encodeButton').addEventListener('click', function() {
            const inputText = document.getElementById('inputText').value;
            try {
                const firstEncode = utf8ToBase64(inputText);
                const secondEncode = utf8ToBase64(firstEncode);
                document.getElementById('outputText').value = secondEncode;
            } catch (error) {
                document.getElementById('outputText').value = error.message;
            }
        });

        /*document.getElementById('decodeButton').addEventListener('click', function() {
            const inputText = document.getElementById('inputText').value;
            try {
                const firstDecode = base64ToUtf8(inputText);
                const secondDecode = base64ToUtf8(firstDecode);
                document.getElementById('outputText').value = secondDecode;
            } catch (error) {
                document.getElementById('outputText').value = error.message;
            }
        });*/
