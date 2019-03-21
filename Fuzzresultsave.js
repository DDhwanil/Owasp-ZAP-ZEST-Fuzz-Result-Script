var OUTPUT_DIR = java.nio.file.Paths.get("/root/Documents/"); 

function processMessage(utils, message) { 
} 

function processResult(utils, fuzzResult){ 
  var filename = fuzzResult.getPayloads().get(0)+ '.html'; 
  var file = 
java.nio.file.Files.newOutputStream(OUTPUT_DIR.resolve(filename), 
java.nio.file.StandardOpenOption.CREATE_NEW); 
  file.write(fuzzResult.getHttpMessage().getResponseBody().getBytes()); 
  file.close();

  return true; 
}
