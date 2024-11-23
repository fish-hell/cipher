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
                
   
                const base58Encoded = base58.encode(firstEncode);

  
                const base32Encoded = base32.encode(base58Encoded);


                const finalBase64 = utf8ToBase64(base32Encoded);


                document.getElementById('outputText').value = finalBase64;
            } catch (error) {
                document.getElementById('outputText').value = error.message;
            }
        });
