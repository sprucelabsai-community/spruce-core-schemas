package v2020_07_22

// THIS FILE IS AUTO-GENERATED. DO NOT EDIT.

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/pkg/schemas"
)

func MakeFeedItemTarget(data map[string]any) (*schemas.FeedItemTarget, error) {
    var feedItemTarget schemas.FeedItemTarget

    jsonData, err := json.Marshal(data)
    if err != nil {
        return nil, err
    }

    err = json.Unmarshal(jsonData, &feedItemTarget)
    if err != nil {
        return nil, err
    }

    return &feedItemTarget, nil
}