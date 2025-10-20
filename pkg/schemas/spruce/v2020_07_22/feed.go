package v2025_10_19

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/schemas"
)

func MakeFeed(data map[string]interface{}) (*schemas.Feed, error) {
    var feed schemas.Feed

    jsonData, err := json.Marshal(data)
    if err != nil {
        return nil, err
    }

    err = json.Unmarshal(jsonData, &feed)
    if err != nil {
        return nil, err
    }

    return &feed, nil
}