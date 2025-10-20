package v2020_07_22

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/schemas"
)

func MakeFeedItem(data map[string]interface{}) (*schemas.FeedItem, error) {
    var feedItem schemas.FeedItem

    jsonData, err := json.Marshal(data)
    if err != nil {
        return nil, err
    }

    err = json.Unmarshal(jsonData, &feedItem)
    if err != nil {
        return nil, err
    }

    return &feedItem, nil
}