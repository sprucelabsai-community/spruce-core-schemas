package v2020_07_22

// THIS FILE IS AUTO-GENERATED. DO NOT EDIT.

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/pkg/schemas"
)

func MakeFeed(data map[string]any) (*schemas.Feed, error) {
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