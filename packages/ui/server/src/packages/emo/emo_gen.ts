// Code generated by codegen/ts/tsgen.go; DO NOT EDIT.
	
import { EmoParams } from './interfaces';
import { EmoHook } from './types';

export default class Emo {
  /// Deactivate the debug session
  ///
  /// This will not print anything anymore
  public activatePrint: boolean;

  /// The debug zone
  ///
  /// An optional indication about a local debug area. It
  /// will prefix the messages
  public zone: string | null;

  /// A hook to execute after each function call
  ///
  /// Can be used to pipe the emodebug messages to logging
  public hook: EmoHook | null;

  /// Deactivate the emojis
  ///
  /// This will not print the emojis in the log messages
  public activateEmojis: boolean;

  /// Default constructor
  public constructor({
    zone = null,
    activatePrint = true,
    activateEmojis = true,
    hook = null
  }: EmoParams = {
      zone: null,
      activatePrint: true,
      activateEmojis: true,
      hook: null
    }) {
    this.zone = zone;
    this.activatePrint = activatePrint;
    this.activateEmojis = activateEmojis;
    this.hook = hook;
  }

	info(...obj: any[]): string { return this.emo("ℹ️", obj); }

	warning(...obj: any[]): string { return this.emo("🔔", obj); }

	error(...obj: any[]): string { return this.emo("💢", obj); }

	query(...obj: any[]): string { return this.emo("🗄️", obj); }

	queryError(...obj: any[]): string { return this.emo("🗄️", obj); }

	encrypt(...obj: any[]): string { return this.emo("🎼", obj); }

	encryptError(...obj: any[]): string { return this.emo("🎼", obj); }

	decrypt(...obj: any[]): string { return this.emo("🗝️", obj); }

	decryptError(...obj: any[]): string { return this.emo("🗝️", obj); }

	time(...obj: any[]): string { return this.emo("⏱️", obj); }

	timeError(...obj: any[]): string { return this.emo("⏱️", obj); }

	param(...obj: any[]): string { return this.emo("📩", obj); }

	paramError(...obj: any[]): string { return this.emo("📩", obj); }

	debug(...obj: any[]): string { return this.emo("💊", obj); }

	state(...obj: any[]): string { return this.emo("📢", obj); }

	save(...obj: any[]): string { return this.emo("💾", obj); }

	delete(...obj: any[]): string { return this.emo("❌", obj); }

	data(...obj: any[]): string { return this.emo("💼", obj); }

	line(...obj: any[]): string { return this.emo("➖", obj); }

	init(...obj: any[]): string { return this.emo("🎬", obj); }

	update(...obj: any[]): string { return this.emo("🆙", obj); }

	ok(...obj: any[]): string { return this.emo("🆗", obj); }

	build(...obj: any[]): string { return this.emo("🔧", obj); }

	aconstructor(...obj: any[]): string { return this.emo("🛠️", obj); }

	notFound(...obj: any[]): string { return this.emo("🚫", obj); }

	found(...obj: any[]): string { return this.emo("👁️‍🗨️", obj); }

	result(...obj: any[]): string { return this.emo("📌", obj); }

	input(...obj: any[]): string { return this.emo("📥", obj); }

	output(...obj: any[]): string { return this.emo("📤", obj); }

	function(...obj: any[]): string { return this.emo("🔨", obj); }

	key(...obj: any[]): string { return this.emo("🔑", obj); }

	accessToken(...obj: any[]): string { return this.emo("🔑", obj); }

	refreshToken(...obj: any[]): string { return this.emo("🗝️", obj); }

	transmit(...obj: any[]): string { return this.emo("📡", obj); }

	start(...obj: any[]): string { return this.emo("🏁", obj); }

	stop(...obj: any[]): string { return this.emo("🛑", obj); }

	arrowIn(...obj: any[]): string { return this.emo("=>", obj); }

	arrowOut(...obj: any[]): string { return this.emo("<=", obj); }

	smallArrowIn(...obj: any[]): string { return this.emo("->", obj); }

	smallArrowOut(...obj: any[]): string { return this.emo("<-", obj); }

	requestGet(...obj: any[]): string { return this.emo("🔷", obj); }

	requestPost(...obj: any[]): string { return this.emo("🔶", obj); }

	/// A simple message with no emoji
	msg(...obj: any[]): string { return this.emo("", obj); }

	/// A debug message for a ready state
	///
	/// emoji: ⏲️
	ready(...obj: any[]) {

		if (obj.length === 0) {
			obj[0] = "ready";
		}
		return this.emo("⏲️", obj);
	}

	/// A separator line
	sep(): string {
		const msg = "➖➖➖➖➖➖➖➖➖➖➖";
		if (this.activatePrint) {
			console.log(msg);
		}
		return msg;
	}

	/// A section start
	section(name: string): string {
		const msg = "➖➖➖➖➖ " + name + " ➖➖➖➖➖";
		if (this.activatePrint) {
			console.log(msg);
		}
		return msg;
	}

	/// A section end
	sectionEnd(): string { return this.sep() }

	/// Print a debug message from an emoji
	emo(emoji: string, obj: Array<any>): string {
		const msg = this._getEmoString(emoji, obj);
		if (this.activatePrint) {
			console.log(msg);
		}
		if (this.hook != null) {
			this.hook(msg);
		}
		return msg;
	}

	print(data: Array<any> | Record<string, any>) {
		Emo.json(data);
	}

	static json(data: Array<any> | Record<string, any>) {
		console.log(JSON.stringify(data, null, "  "));
	}

	private _getEmoString(emoji: string, obj: Array<any>): string {
		const l = new Array<string>();
		if (this.activateEmojis && emoji != null) {
			l.push(emoji);
		}
		if (this.zone != null) {
			l.push("[" + this.zone + "]");
		}
		if (obj.length > 0) {
			obj.forEach((o) => {
				if (typeof o === 'object') {
					l.push(JSON.stringify(o))
				} else {
					l.push(o.toString());
				}
			});
		}
		return l.join(" ");
	}
}
