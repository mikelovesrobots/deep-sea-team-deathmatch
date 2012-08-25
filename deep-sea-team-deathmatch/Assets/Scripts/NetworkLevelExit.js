#pragma strict

public var level : String = 'Game';

function OnDisconnectedFromServer() {
  Application.LoadLevel(level);
}
