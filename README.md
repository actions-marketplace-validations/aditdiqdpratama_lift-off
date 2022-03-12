# 🚀 Lift Off send chat to Jetbrains Space

This action send chat to Jetbrains Space

## Inputs

## `token`
**Required** Private access token, right now only support for lifetime access token
Make sure the your access token has right permission to send message to channel

## `message`
Text message payload, default message: `Hello World, its me ready to lunch 🚀`

## `channel`
**Required** Jetbrains Space channel id

## `base-url`
**Required** Jetbrains Space base url

## Outputs

## `time`
timestamp execution is done

## Example usage
```yaml
- name: Push notif to channel
    id: push-notif
    uses: aditdiqdpratama/lift-off@v0.0.5
    with:
      token: ${{ secret.SPACE_TOKEN }}
      channel: 'channel:id:xxx'
      base-url: 'company.jetbrains.space'
```
