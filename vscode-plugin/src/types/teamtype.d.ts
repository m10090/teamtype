// SPDX-FileCopyrightText: 2024 blinry <mail@blinry.org>
// SPDX-FileCopyrightText: 2024 zormit <nt4u@kpvn.de>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

interface Position {
    line: number
    character: number
}

interface Range {
    start: Position
    end: Position
}

interface Delta {
    range: Range
    replacement: string
}

interface Edit {
    uri: string
    revision: number
    delta: Delta[]
}

interface Cursor {
    uri: string
    ranges: Range[]
}

interface CursorFromDaemon {
    userid: string
    name?: string
    uri: string
    ranges: Range[]
}

declare class Revision {
    daemon: number
    editor: number
}

interface Configuration {
    cmd: string[]
    rootMarkers: string[]
}

interface DocumentOTState {
    revision: Revision
    content: string[]
}

interface RemoteCursor {
    name: string
    uri: import("vscode").Uri
    selection: import("vscode").DecorationOptions
}
