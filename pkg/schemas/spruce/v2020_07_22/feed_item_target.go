package v2020_07_22

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/schemas"
)

func MakeFeedItemTarget(data map[string]interface{}) (*schemas.FeedItemTarget, error) {
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