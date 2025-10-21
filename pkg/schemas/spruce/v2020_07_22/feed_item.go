package v2020_07_22

// THIS FILE IS AUTO-GENERATED. DO NOT EDIT.

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/pkg/schemas"
)

func MakeFeedItem(data map[string]any) (*schemas.FeedItem, error) {
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