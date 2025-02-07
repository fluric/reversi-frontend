# ReversiApi.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**makeOpponentMove**](DefaultApi.md#makeOpponentMove) | **POST** /api/game/move | Make the opponent&#39;s move



## makeOpponentMove

> GameResponse makeOpponentMove(gameRequest)

Make the opponent&#39;s move

### Example

```javascript
import ReversiApi from 'reversi_api';

let apiInstance = new ReversiApi.DefaultApi();
let gameRequest = new ReversiApi.GameRequest(); // GameRequest | 
apiInstance.makeOpponentMove(gameRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameRequest** | [**GameRequest**](GameRequest.md)|  | 

### Return type

[**GameResponse**](GameResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

